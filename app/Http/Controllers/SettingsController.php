<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsResource;
use App\Services\SettingsService;
use App\Settings;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param \App\Services\SettingsService $settingsService
     *
     * @return \App\Http\Resources\SettingsResource
     */
    public function index(SettingsService $settingsService)
    {
        return new SettingsResource(
            $settingsService->index(1)
        );
    }
}
