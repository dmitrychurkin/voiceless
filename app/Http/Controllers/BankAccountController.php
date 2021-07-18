<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateBankAccountRequest, UpdateBankAccountRequest};
use App\Http\Resources\BankAccountResource;
use App\BankAccount;
use App\Services\BankAccountService;

class BankAccountController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\CreateBankAccountRequest  $request
     * @param \App\Services\BankAccountService $bankAccountService
     *
     * @return \App\Http\Resources\BankAccountResource
     */
    public function store(CreateBankAccountRequest $request, BankAccountService $bankAccountService)
    {
        return new BankAccountResource(
            $bankAccountService->store($request->getDto())
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateBankAccountRequest  $request
     * @param \App\BankAccount  $bankAccount
     * @param \App\Services\BankAccountService $bankAccountService
     *
     * @return \Illuminate\Http\Response
     */
    public function update(
        UpdateBankAccountRequest $request,
        BankAccount $bankAccount,
        BankAccountService $bankAccountService)
    {
        $bankAccountService->update(
            $request->getDto(),
            $bankAccount
        );
        return response(null);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\BankAccount  $bankAccount
     * @param \App\Services\BankAccountService $bankAccountService
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(BankAccount $bankAccount, BankAccountService $bankAccountService)
    {
        $bankAccountService->destroy($bankAccount);
        return response(null);
    }
}
