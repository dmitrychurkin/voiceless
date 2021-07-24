<?php

namespace App\Services\SocialLink;

use App\SocialLink as SocialLinkModel;
use App\DTOs\{CreateSocialLinkDto, UpdateSocialLinkDto};
use App\Repositories\Settings\Settings as SettingsRepository;

final class SocialLinkService implements SocialLink
{
    /** @var SettingsRepository */
    private SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\DTOs\CreateSocialLinkDto $createSocialLinkDto
     * @return App\SocialLink
     */
    public function store(CreateSocialLinkDto $createSocialLinkDto): SocialLinkModel
    {
        return $this->settingsRepository->create(
            $this->getSocialLinkData($createSocialLinkDto),
            SocialLink::class
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateSocialLinkDto $updateSocialLinkDto
     * @param  \App\SocialLink $socialLink
     * @return bool
     */
    public function update(UpdateSocialLinkDto $updateSocialLinkDto, SocialLinkModel $socialLink): bool
    {
        return $this->settingsRepository->update(
            $this->getSocialLinkData($updateSocialLinkDto),
            $socialLink
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SocialLink $socialLink
     * @return ?bool
     */
    public function destroy(SocialLinkModel $socialLink): ?bool
    {
        return $this->settingsRepository->delete($socialLink);
    }


    /**
     * @param CreateSocialLinkDto|UpdateSocialLinkDto $socialLinkDto
     * @return array
     */
    private function getSocialLinkData(object $socialLinkDto): array
    {
        return [
            'name' => $socialLinkDto->getName(),
            'url' => $socialLinkDto->getUrl()
        ];
    }
}
