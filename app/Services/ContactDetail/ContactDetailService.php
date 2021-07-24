<?php

namespace App\Services\ContactDetail;

use App\ContactDetail as ContactDetailModel;
use App\DTOs\{CreateContactDetailDto, UpdateContactDetailDto};
use App\Repositories\Settings\Settings as SettingsRepository;

final class ContactDetailService implements ContactDetail
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
     * @param  App\DTOs\CreateContactDetailDto $createContactDetailDto
     * @return App\ContactDetail
     */
    public function store(CreateContactDetailDto $createContactDetailDto): ContactDetailModel
    {
        return $this->settingsRepository->create(
            $this->getContactDetailData($createContactDetailDto),
            ContactDetail::class
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateContactDetailDto $updateContactDetailDto
     * @param  \App\ContactDetail  $contactDetail
     * @return bool
     */
    public function update(UpdateContactDetailDto $updateContactDetailDto, ContactDetailModel $contactDetail): bool
    {
        return $this->settingsRepository->update(
            $this->getContactDetailData($updateContactDetailDto),
            $contactDetail
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ContactDetail  $contactDetail
     * @return ?bool
     */
    public function destroy(ContactDetailModel $contactDetail): ?bool
    {
        return $this->settingsRepository->delete($contactDetail);
    }


    /**
     * @param CreateContactDetailDto|UpdateContactDetailDto $contactDetailDto
     * @return array
     */
    private function getContactDetailData(object $contactDetailDto): array
    {
        return [
            'phone' => $contactDetailDto->getPhone(),
            'email' => $contactDetailDto->getEmail(),
            'address' => $contactDetailDto->getAddress(),
            'contactPerson' => $contactDetailDto->getContactPerson(),
        ];
    }
}
