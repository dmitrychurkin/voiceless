<?php

namespace App\Services;

use App\BankAccount;
use App\DTOs\{CreateBankAccountDto, UpdateBankAccountDto};
use App\Repositories\Settings\Settings as SettingsRepository;

final class BankAccountService
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
     * @param  App\DTOs\CreateBankAccountDto $createBankAccountDto
     * @return App\BankAccount
     */
    public function store(CreateBankAccountDto $createBankAccountDto): BankAccount
    {
        return $this->settingsRepository->create(
            $this->getBankAccountData($createBankAccountDto),
            BankAccount::class
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\DTOs\UpdateBankAccountDto $updateBankAccountDto
     * @param  \App\BankAccount $bankAccount
     * @return bool
     */
    public function update(UpdateBankAccountDto $updateBankAccountDto, BankAccount $bankAccount): bool
    {
        return $this->settingsRepository->update(
            $this->getBankAccountData($updateBankAccountDto),
            $bankAccount
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BankAccount $bankAccount
     * @return ?bool
     */
    public function destroy(BankAccount $bankAccount): ?bool
    {
        return $this->settingsRepository->delete($bankAccount);
    }


    /**
     * @param CreateBankAccountDto|UpdateBankAccountDto $bankAccountDto
     * @return array
     */
    private function getBankAccountData(object $bankAccountDto): array
    {
        return [
            'bankName' => $bankAccountDto->getBankName(),
            'accountName' => $bankAccountDto->getAccountName(),
            'accountNumber' => $bankAccountDto->getAccountNumber()
        ];
    }
}
