<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateContactDetailRequest, UpdateContactDetailRequest};
use App\Http\Resources\ContactDetailResource;
use App\ContactDetail;
use App\Services\ContactDetailService;

class ContactDetailController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Requests\CreateContactDetailRequest $createContactDetailRequest
     * @param \App\Services\ContactDetailService $contactDetailService
     *
     * @return \App\Http\Resources\ContactDetailResource
     */
    public function store(CreateContactDetailRequest $createContactDetailRequest, ContactDetailService $contactDetailService)
    {
        return new ContactDetailResource(
            $contactDetailService->store($createContactDetailRequest->getDto())
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Requests\UpdateContactDetailRequest $updateContactDetailRequest
     * @param \App\ContactDetail  $contactDetail
     * @param \App\Services\ContactDetailService $contactDetailService
     *
     * @return \Illuminate\Http\Response
     */
    public function update(
        UpdateContactDetailRequest $updateContactDetailRequest,
        ContactDetail $contactDetail,
        ContactDetailService $contactDetailService)
    {
        $contactDetailService->update(
            $updateContactDetailRequest->getDto(),
            $contactDetail
        );
        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\ContactDetail  $contactDetail
     * @param \App\Services\ContactDetailService $contactDetailService
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactDetail $contactDetail, ContactDetailService $contactDetailService)
    {
        $contactDetailService->destroy($contactDetail);
        return response(null);
    }
}
