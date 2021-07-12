<?php

namespace App\DTOs;

final class ForgotPasswordDto
{
    /** @var string */
    private string $email;

    function __construct(string $email)
    {
        $this->email = $email;
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}