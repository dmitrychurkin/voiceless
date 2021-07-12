<?php

namespace App\Queries;

use App\User;

interface UserQueries
{
    public function getUserByEmail(string $email): ?User;
}
