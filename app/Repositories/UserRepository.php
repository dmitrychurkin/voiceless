<?php

namespace App\Repositories;

use App\DTOs\UpdateUserPasswordDto;
use App\Queries\UserQueries;
use Illuminate\Support\Str;
use App\User;

final class UserRepository implements UserQueries
{
    public function getUserByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }

    public function updatePassword(UpdateUserPasswordDto $updateUserPasswordDto): bool
    {
        $user = $updateUserPasswordDto->getUser()->forceFill([
            'password' => $updateUserPasswordDto->getPassword()
        ]);

        $rememberToken = $updateUserPasswordDto->getRememberToken();
        if ($rememberToken) {
            $user->setRememberToken($rememberToken);
        }

        return $user->save();
    }
}