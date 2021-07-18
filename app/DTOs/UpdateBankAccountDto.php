<?php

namespace App\DTOs;

final class UpdateBankAccountDto
{
    /** @var ?string */
    private ?string $bankName;

    /** @var ?string */
    private ?string $accountName;

    /** @var ?string */
    private ?string $accountNumber;

    public function __construct(
        ?string $bankName,
        ?string $accountName,
        ?string $accountNumber)
    {
        $this->bankName = $bankName;
        $this->accountName = $accountName;
        $this->accountNumber = $accountNumber;
    }

    public function getBankName(): ?string
    {
        return $this->bankName;
    }

    public function getAccountName(): ?string
    {
        return $this->accountName;
    }

    public function getAccountNumber(): ?string
    {
        return $this->accountNumber;
    }
}
