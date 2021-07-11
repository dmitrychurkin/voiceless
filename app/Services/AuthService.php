<?php

namespace App\Services;

use App\DTOs\{AuthenticateDto, ForgotPasswordDto};
use App\Exceptions\AuthException;
use Illuminate\Support\Facades\{Auth, Password};

final class AuthService
{
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
}
