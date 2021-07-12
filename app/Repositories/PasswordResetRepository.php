<?php

namespace App\Repositories;

use App\Queries\PasswordResetQueries;
use Illuminate\Support\Facades\DB;
use stdClass;

final class PasswordResetRepository implements PasswordResetQueries
{
    public function getPasswordResetByEmail(string $email): ?stdClass
    {
        return DB::table('password_resets')->where('email', $email)->first();
    }
}
