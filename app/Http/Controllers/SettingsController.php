<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsResource;
use App\Settings;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \App\Http\Resources\SettingsResource
     */
    public function index()
    {
        $settings = Settings::firstOrCreate(
            ['id' => 1]
        );

        return new SettingsResource($settings);
    }
}
