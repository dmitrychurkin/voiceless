<?php

namespace App\Services\ContactDetail;

use App\ContactDetail as ContactDetailModel;
use App\DTOs\{CreateContactDetailDto, UpdateContactDetailDto};

interface ContactDetail
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  App\DTOs\CreateContactDetailDto $createContactDetailDto
     * @return App\ContactDetail
     */
    public function store(CreateContactDetailDto $createContactDetailDto): ContactDetailModel;

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateContactDetailDto $updateContactDetailDto
     * @param  \App\ContactDetail  $contactDetail
     * @return bool
     */
    public function update(UpdateContactDetailDto $updateContactDetailDto, ContactDetailModel $contactDetail): bool;

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ContactDetail  $contactDetail
     * @return ?bool
     */
    public function destroy(ContactDetailModel $contactDetail): ?bool;
}
