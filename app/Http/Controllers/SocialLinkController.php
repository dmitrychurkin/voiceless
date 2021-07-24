<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateSocialLinkRequest, UpdateSocialLinkRequest};
use App\Http\Resources\SocialLinkResource;
use App\SocialLink;
use App\Services\SocialLink\SocialLink as SocialLinkService;

class SocialLinkController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\CreateSocialLinkRequest  $request
     * @param \App\Services\SocialLink\SocialLink $socialLinkService
     *
     * @return \App\Http\Resources\SocialLinkResource
     */
    public function store(CreateSocialLinkRequest $request, SocialLinkService $socialLinkService)
    {
        return new SocialLinkResource(
            $socialLinkService->store($request->getDto())
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateSocialLinkRequest $request
     * @param \App\SocialLink  $socialLink
     * @param \App\Services\SocialLink\SocialLink $socialLinkService
     *
     * @return \Illuminate\Http\Response
     */
    public function update(
        UpdateSocialLinkRequest $request,
        SocialLink $socialLink,
        SocialLinkService $socialLinkService)
    {
        $socialLinkService->update(
            $request->getDto(),
            $socialLink
        );
        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\SocialLink  $socialLink
     * @param \App\Services\SocialLink\SocialLink $socialLinkService
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialLink $socialLink, SocialLinkService $socialLinkService)
    {
        $socialLinkService->destroy($socialLink);
        return response(null);
    }
}
