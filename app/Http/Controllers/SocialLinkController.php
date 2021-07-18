<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateSocialLinkRequest, UpdateSocialLinkRequest};
use App\Http\Resources\SocialLinkResource;
use App\Services\SocialLinkService;
use App\SocialLink;
class SocialLinkController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\CreateSocialLinkRequest  $request
     * @param \App\Services\SocialLinkService $socialLinkService
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
     * @param \App\Services\SocialLinkService $socialLinkService
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
     * @param \App\Services\SocialLinkService $socialLinkService
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialLink $socialLink, SocialLinkService $socialLinkService)
    {
        $socialLinkService->destroy($socialLink);
        return response(null);
    }
}
