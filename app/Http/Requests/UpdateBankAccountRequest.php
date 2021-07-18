<?php

namespace App\Http\Requests;

use App\DTOs\UpdateBankAccountDto;
use Illuminate\Foundation\Http\FormRequest;

class UpdateBankAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'bankName' => 'required_without_all:accountName,accountNumber|string|max:255',
            'accountName' => 'required_without_all:bankName,accountNumber|string|max:255|unique:bank_accounts,accountName',
            'accountNumber' => 'required_without_all:bankName,accountName|string|max:50'
        ];
    }

    /**
     * @return UpdateBankAccountDto
     */
    public function getDto(): UpdateBankAccountDto
    {
        return new UpdateBankAccountDto(
            $this->get('bankName'),
            $this->get('accountName'),
            $this->get('accountNumber')
        );
    }
}
