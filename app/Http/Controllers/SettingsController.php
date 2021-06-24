<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsResource;
use App\Settings;
use Illuminate\Http\Request;

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
            ['id' => 1],
            ['about' => '']
        );

        return new SettingsResource($settings);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Site  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Settings $setting)
    {
        return $setting;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Settings $site)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(Settings $site)
    {
        //
    }
}
