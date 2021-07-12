<?php

namespace App\Services;

use App\DTOs\{AuthenticateDto, ForgotPasswordDto, ResetPasswordDto, UpdateUserPasswordDto};
use App\Exceptions\AuthException;
use App\Repositories\{PasswordResetRepository, UserRepository};
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\{Arr, Str};
use Illuminate\Support\Facades\{Auth, Hash, Password};

final class AuthService
{
    /** @var PasswordResetRepository */
    private PasswordResetRepository $passwordResetRepository;

    /** @var UserRepository */
    private UserRepository $userRepository;

    public function __construct(
        PasswordResetRepository $passwordResetRepository,
        UserRepository $userRepository)
    {
        $this->passwordResetRepository = $passwordResetRepository;
        $this->userRepository = $userRepository;
    }
    /**
     * Authenticates user
     *
     * @param AuthenticateDto $authenticateDto
     * @return void
     * @throws AuthenticateException
     */
    public function authenticate(AuthenticateDto $authenticateDto): void
    {
        if (Auth::attempt([
            'email' => $authenticateDto->getEmail(),
            'password' => $authenticateDto->getPassword()
        ], $authenticateDto->getHasRemember())) {
            request()->session()->regenerate();
            return;
        }

        throw new AuthException('auth.failed');
    }

    /**
     * Logout user
     * @return void
     */
    public function logout(): void
    {
        Auth::guard('web')->logout();

        $session = request()->session();

        $session->invalidate();
        $session->regenerateToken();
    }

    /**
     * Sends password reset link via email
     *
     * @param ForgotPasswordDto $forgotPasswordDto
     * @return string
     * @throws AuthException
     */
    public function forgot(ForgotPasswordDto $forgotPasswordDto): string
    {
        $status = Password::sendResetLink(['email' => $forgotPasswordDto->getEmail()]);

        if ($status === Password::RESET_LINK_SENT) {
            return $status;
        }

        throw new AuthException($status);
    }

    /**
     * Displays password reset form
     *
     * @param string $passwordResetToken
     * @return bool
     */
    public function showPasswordReset(string $passwordResetToken): bool
    {
        $queryParams = request()->query();
        if (!Arr::exists($queryParams, 'email')) {
            return false;
        }

        $passwordResetRecord = $this->passwordResetRepository->getPasswordResetByEmail($queryParams['email']);

        if (!$passwordResetRecord) {
            return false;
        }

        if (!Hash::check($passwordResetToken, $passwordResetRecord->token)) {
            return false;
        }

        $isPasswordResetTokenExpired = now()
            ->parse($passwordResetRecord->created_at)
            ->addMinutes(config('auth.passwords.users.expire'))
            ->isPast();
        if ($isPasswordResetTokenExpired) {
            return false;
        }

        return true;
    }

    /**
     * Resets user's password
     *
     * @param ResetPasswordDto $request
     * @return \Illuminate\Http\JsonResponse
     *         |\Illuminate\Http\RedirectResponse
     * @throws AuthException
     */
    public function reset(ResetPasswordDto $resetPasswordDto)
    {
        $userRepository = $this->userRepository;
        $user = $userRepository->getUserByEmail($resetPasswordDto->getEmail());

        if (Hash::check($resetPasswordDto->getPassword(), $user->password)) {
            throw new AuthException('passwords.password_repeat', 'password');
        }

        $status = Password::reset(
            [
                'token' => $resetPasswordDto->getPasswordResetToken(),
                'email' => $resetPasswordDto->getEmail(),
                'password' => $resetPasswordDto->getPassword(),
                'password_confirmation' => $resetPasswordDto->getPasswordConfirmation()
            ],
            function ($user, $password) use ($userRepository) {
                $userRepository->updatePassword(
                    new UpdateUserPasswordDto(
                        $user,
                        Hash::make($password),
                        Str::random(60)
                    )
                );

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return $status;
        }

        throw new AuthException($status);
    }
}
