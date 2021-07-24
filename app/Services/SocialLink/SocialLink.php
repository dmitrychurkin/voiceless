<?php

namespace App\Services\SocialLink;

use App\DTOs\{CreateSocialLinkDto, UpdateSocialLinkDto};
use App\SocialLink as SocialLinkModel;

interface SocialLink
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  App\DTOs\CreateSocialLinkDto $createSocialLinkDto
     * @return App\SocialLink
     */
    public function store(CreateSocialLinkDto $createSocialLinkDto): SocialLinkModel;

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateSocialLinkDto $updateSocialLinkDto
     * @param  \App\SocialLink $socialLink
     * @return bool
     */
    public function update(UpdateSocialLinkDto $updateSocialLinkDto, SocialLinkModel $socialLink): bool;

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SocialLink $socialLink
     * @return ?bool
     */
    public function destroy(SocialLinkModel $socialLink): ?bool;
}
