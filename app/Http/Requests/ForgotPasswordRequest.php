<?php

namespace App\Http\Requests;

use App\DTOs\ForgotPasswordDto;
use Illuminate\Foundation\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
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
            'email' => 'required|email'
        ];
    }

    /**
     * @return ForgotPasswordDto
     */
    public function getDto(): ForgotPasswordDto
    {
        return new ForgotPasswordDto($this->get('email'));
    }
}
