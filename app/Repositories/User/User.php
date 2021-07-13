<?php

namespace App\Repositories\User;

use App\DTOs\UpdateUserPasswordDto;
use App\Queries\UserQueries;

interface User extends UserQueries
{
    public function updatePassword(UpdateUserPasswordDto $updateUserPasswordDto): bool;
}
