<?php

namespace App\DTOs;

use App\User;

final class UpdateUserPasswordDto
{
    /** @var User */
    private User $user;

    /** @var string */
    private string $password;

    /** @var string */
    private string $rememberToken;

    function __construct(User $user, string $password, string $rememberToken = '')
    {
        $this->user = $user;
        $this->password = $password;
        $this->rememberToken = $rememberToken;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getRememberToken(): string
    {
        return $this->rememberToken;
    }
}
