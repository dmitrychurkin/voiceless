<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateContactDetailRequest, UpdateContactDetailRequest};
use App\Http\Resources\ContactDetailResource;
use App\{Settings, ContactDetail};
class ContactDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function index(ContactDetail $contactDetail)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateContactDetailRequest  $request
     * @return \App\Http\Resources\ContactDetailResource
     */
    public function store(CreateContactDetailRequest $request)
    {
        $validated = $request->validated();

        return new ContactDetailResource(
            ContactDetail::create($validated)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function show(ContactDetail $contactDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactDetailRequest $request
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactDetailRequest $request, ContactDetail $contactDetail)
    {
        $validated = $request->validated();

        foreach($validated as $key => $value) {
            $contactDetail[$key] = $value;
        }

        $contactDetail->save();

        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactDetail $contactDetail)
    {
        $contactDetail->delete();
        return response(null);
    }
}
