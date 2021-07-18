<?php

namespace App\Http\Requests;

use App\DTOs\UpdateContactDetailDto;
use Illuminate\Foundation\Http\FormRequest;

class UpdateContactDetailRequest extends FormRequest
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
            'phone' => 'required_without_all:email,address,contactPerson|string|max:20',
            'email' => 'required_without_all:phone,address,contactPerson|email|max:255|unique:contact_details,email',
            'address' => 'required_without_all:phone,email,contactPerson|string|max:200',
            'contactPerson' => 'required_without_all:phone,email,address|string|max:100'
        ];
    }

    /**
     * @return UpdateContactDetailDto
     */
    public function getDto(): UpdateContactDetailDto
    {
        return new UpdateContactDetailDto(
            $this->get('phone'),
            $this->get('email'),
            $this->get('address'),
            $this->get('contactPerson')
        );
    }
}
