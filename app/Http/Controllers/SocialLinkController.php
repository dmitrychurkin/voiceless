<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateSocialLinkRequest, UpdateSocialLinkRequest};
use App\Http\Resources\SocialLinkResource;
use App\SocialLink;
class SocialLinkController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateSocialLinkRequest  $request
     * @return \App\Http\Resources\SocialLinkResource
     */
    public function store(CreateSocialLinkRequest $request)
    {
        $validated = $request->validated();

        return new SocialLinkResource(
            SocialLink::create($validated)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSocialLinkRequest $request
     * @param  \App\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSocialLinkRequest $request, SocialLink $socialLink)
    {
        $validated = $request->validated();

        foreach($validated as $key => $value) {
            $socialLink[$key] = $value;
        }

        $socialLink->save();

        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialLink $socialLink)
    {
        $socialLink->delete();
        return response(null);
    }
}
