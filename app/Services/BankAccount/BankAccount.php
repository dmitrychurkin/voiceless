<?php

namespace App\Services\BankAccount;

use App\BankAccount as BankAccountModel;
use App\DTOs\{CreateBankAccountDto, UpdateBankAccountDto};

interface BankAccount
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  App\DTOs\CreateBankAccountDto $createBankAccountDto
     * @return App\BankAccount
     */
    public function store(CreateBankAccountDto $createBankAccountDto): BankAccountModel;

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateBankAccountDto $updateBankAccountDto
     * @param  \App\BankAccount $bankAccount
     * @return bool
     */
    public function update(UpdateBankAccountDto $updateBankAccountDto, BankAccountModel $bankAccount): bool;

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BankAccount $bankAccount
     * @return ?bool
     */
    public function destroy(BankAccountModel $bankAccount): ?bool;
}
