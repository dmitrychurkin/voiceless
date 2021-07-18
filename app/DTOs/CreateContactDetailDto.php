<?php

namespace App\DTOs;

final class CreateContactDetailDto
{
    /** @var string */
    private string $phone;

    /** @var string */
    private string $email;

    /** @var string */
    private string $address;

    /** @var string */
    private string $contactPerson;

    public function __construct(
        string $phone,
        string $email,
        string $address,
        string $contactPerson)
    {
        $this->phone = $phone;
        $this->email = $email;
        $this->address = $address;
        $this->contactPerson = $contactPerson;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function getContactPerson(): string
    {
        return $this->contactPerson;
    }
}
