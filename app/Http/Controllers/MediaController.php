<?php

namespace App\Http\Controllers;

use App\Album;
use App\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function index(Album $album)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Album $album)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Album  $album
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function show(Album $album, Media $media)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Album  $album
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album, Media $media)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Album  $album
     * @param  \App\Media  $media
     * @return \Illuminate\Http\Response
     */
    public function destroy(Album $album, Media $media)
    {
        //
    }
}
