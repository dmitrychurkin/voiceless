<?php

namespace App\Queries;

use stdClass;

interface PasswordResetQueries
{
    public function getPasswordResetByEmail(string $email): ?stdClass;
}
