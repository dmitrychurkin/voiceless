<?php

namespace App\Repositories\PasswordReset;

use Illuminate\Support\Facades\DB;
use stdClass;

final class PasswordResetRepository implements PasswordReset
{
    public function getPasswordResetByEmail(string $email): ?stdClass
    {
        return DB::table('password_resets')->where('email', $email)->first();
    }
}
