<?php

namespace App\Http\Requests;

use App\DTOs\ResetPasswordDto;
use Illuminate\Foundation\Http\FormRequest;

class ResetPasswordRequest extends FormRequest
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
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ];
    }

    /**
     * @return ResetPasswordDto
     */
    public function getDto(): ResetPasswordDto
    {
        return new ResetPasswordDto(
            $this->get('token'),
            $this->get('email'),
            $this->get('password'),
            $this->get('password_confirmation')
        );
    }
}
