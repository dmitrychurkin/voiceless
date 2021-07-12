<?php

namespace App\DTOs;

final class AuthenticateDto
{
    /** @var string */
    private string $email;

    /** @var string */
    private string $password;

    /** @var bool */
    private bool $hasRemember;

    function __construct(
        string $email,
        string $password,
        bool $hasRemember)
    {
        $this->email = $email;
        $this->password = $password;
        $this->hasRemember = $hasRemember;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getHasRemember(): bool
    {
        return $this->hasRemember;
    }
}
