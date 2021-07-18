<?php

namespace App\Queries;

use App\Settings;

interface SettingsQueries
{
    public function getSettingsByIdOrCreate(int $id): Settings;
}