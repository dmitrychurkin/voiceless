<?php

namespace App\Services\Settings;

use App\Settings as SettingsModel;

interface Settings
{
    public function index(int $id): SettingsModel;
}