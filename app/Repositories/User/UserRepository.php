<?php

namespace App\Repositories\User;

use App\DTOs\UpdateUserPasswordDto;
use App\User as UserModel;

final class UserRepository implements User
{
    public function getUserByEmail(string $email): ?UserModel
    {
        return UserModel::where('email', $email)->first();
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