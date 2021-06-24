<?php

namespace App\Http\Controllers;

use App\Settings;
use App\SocialLink;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Settings  $settings
     * @return \Illuminate\Http\Response
     */
    public function index(Settings $settings)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Settings  $settings
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Settings $settings)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Settings  $settings
     * @param  \App\SocialLinks  $socialLinks
     * @return \Illuminate\Http\Response
     */
    public function show(Settings $settings, SocialLink $socialLinks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Settings  $settings
     * @param  \App\SocialLinks  $socialLinks
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Settings $settings, SocialLink $socialLinks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Settings  $settings
     * @param  \App\SocialLinks  $socialLinks
     * @return \Illuminate\Http\Response
     */
    public function destroy(Settings $settings, SocialLink $socialLinks)
    {
        //
    }
}
