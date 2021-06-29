<?php

namespace App\Http\Controllers;

use App\BankAccount;
use App\Http\Requests\{CreateBankAccountRequest, UpdateBankAccountRequest};
use App\Http\Resources\BankAccountResource;

class BankAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateBankAccountRequest  $request
     * @return \App\Http\Resources\BankAccountResource
     */
    public function store(CreateBankAccountRequest $request)
    {
        $validated = $request->validated();

        return new BankAccountResource(
            BankAccount::create($validated)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBankAccountRequest  $request
     * @param  \App\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBankAccountRequest $request, BankAccount $bankAccount)
    {
        $validated = $request->validated();

        foreach($validated as $key => $value) {
            $bankAccount[$key] = $value;
        }

        $bankAccount->save();

        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BankAccount  $bankAccount
     * @return \Illuminate\Http\Response
     */
    public function destroy(BankAccount $bankAccount)
    {
        $bankAccount->delete();
        return response(null);
    }
}