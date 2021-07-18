<?php

namespace App\Services;

use App\Repositories\Settings\Settings as SettingsRepository;
use App\Settings;

final class SettingsService
{
    /** @var SettingsRepository */
    private SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    public function index(int $id = 1): Settings
    {
        return $this->settingsRepository->getSettingsByIdOrCreate($id);
    }
}
