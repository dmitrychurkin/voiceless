<?php

namespace App\Http\Controllers;

use App\ContactDetail;
use App\Http\Requests\{CreateContactDetailRequest, UpdateContactDetailRequest};
use App\Http\Resources\ContactDetailResource;
use App\Settings;
use Illuminate\Http\Request;

class ContactDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Settings  $settings
     * @return \Illuminate\Http\Response
     */
    public function index(Settings $settings)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateContactDetailRequest  $request
     * @param  \App\Settings  $setting
     * @return \App\Http\Resources\ContactDetailResource
     */
    public function store(CreateContactDetailRequest $request, Settings $setting)
    {
        $validated = $request->validated();

        return new ContactDetailResource(
            $setting->contactDetails()->create($validated)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Settings  $settings
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function show(Settings $settings, ContactDetail $contactDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactDetailRequest $request
     * @param  \App\Settings  $settings
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactDetailRequest $request, Settings $settings, ContactDetail $contactDetail)
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
     * @param  \App\Settings  $settings
     * @param  \App\ContactDetail  $contactDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(Settings $settings, ContactDetail $contactDetail)
    {
        $contactDetail->delete();
        return response(null);
    }
}
