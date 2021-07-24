<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsResource;
use App\Services\Settings\Settings as SettingsService;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param \App\Services\Settings\Settings $settingsService
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
