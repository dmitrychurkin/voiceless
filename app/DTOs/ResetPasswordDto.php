<?php

namespace App\DTOs;

final class ResetPasswordDto
{
    /** @var string */
    private string $passwordResetToken;

    /** @var string */
    private string $email;

    /** @var string */
    private string $password;

    /** @var string */
    private string $passwordConfirmation;

    public function __construct(
        string $passwordResetToken,
        string $email,
        string $password,
        string $passwordConfirmation)
    {
        $this->passwordResetToken = $passwordResetToken;
        $this->email = $email;
        $this->password = $password;
        $this->passwordConfirmation = $passwordConfirmation;
    }

    public function getPasswordResetToken(): string
    {
        return $this->passwordResetToken;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getPasswordConfirmation(): string
    {
        return $this->passwordConfirmation;
    }
}
