<?php

namespace App\Services\Settings;

use App\Repositories\Settings\Settings as SettingsRepository;
use App\Settings as SettingsModel;

final class SettingsService implements Settings
{
    /** @var SettingsRepository */
    private SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    public function index(int $id = 1): SettingsModel
    {
        return $this->settingsRepository->getSettingsByIdOrCreate($id);
    }
}
