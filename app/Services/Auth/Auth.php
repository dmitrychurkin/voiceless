<?php

namespace App\Services\Auth;

use App\DTOs\{AuthenticateDto, ForgotPasswordDto, ResetPasswordDto};

interface Auth
{
    /**
     * Authenticates user
     *
     * @param AuthenticateDto $authenticateDto
     * @return void
     * @throws AuthenticateException
     */
    public function authenticate(AuthenticateDto $authenticateDto): void;

    /**
     * Logout user
     * @return void
     */
    public function logout(): void;

    /**
     * Sends password reset link via email
     *
     * @param ForgotPasswordDto $forgotPasswordDto
     * @return string
     * @throws AuthException
     */
    public function forgot(ForgotPasswordDto $forgotPasswordDto): string;

    /**
     * Displays password reset form
     *
     * @param string $passwordResetToken
     * @return bool
     */
    public function showPasswordReset(string $passwordResetToken): bool;

    /**
     * Resets user's password
     *
     * @param ResetPasswordDto $request
     * @return string
     *
     * @throws AuthException
     */
    public function reset(ResetPasswordDto $resetPasswordDto): string;
}
