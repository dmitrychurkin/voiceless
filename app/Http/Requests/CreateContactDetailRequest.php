<?php

namespace App\Http\Requests;

use App\DTOs\CreateContactDetailDto;
use Illuminate\Foundation\Http\FormRequest;

class CreateContactDetailRequest extends FormRequest
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
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255|unique:contact_details,email',
            'address' => 'required|string|max:200',
            'contactPerson' => 'required|string|max:100'
        ];
    }

    /**
     * @return CreateContactDetailDto
     */
    public function getDto(): CreateContactDetailDto
    {
        return new CreateContactDetailDto(
            $this->get('phone'),
            $this->get('email'),
            $this->get('address'),
            $this->get('contactPerson')
        );
    }
}
