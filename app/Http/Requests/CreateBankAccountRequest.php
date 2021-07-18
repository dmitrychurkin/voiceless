<?php

namespace App\Http\Requests;

use App\DTOs\CreateBankAccountDto;
use Illuminate\Foundation\Http\FormRequest;

class CreateBankAccountRequest extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = true;

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
            'bankName' => 'required|string|max:255',
            'accountName' => 'required|string|max:255|unique:bank_accounts,accountName',
            'accountNumber' => 'required|string|max:50'
        ];
    }

    /**
     * @return CreateBankAccountDto
     */
    public function getDto(): CreateBankAccountDto
    {
        return new CreateBankAccountDto(
            $this->get('bankName'),
            $this->get('accountName'),
            $this->get('accountNumber')
        );
    }
}
