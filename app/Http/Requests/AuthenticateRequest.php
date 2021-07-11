<?php

namespace App\Http\Requests;

use App\DTOs\AuthenticateDto;
use Illuminate\Foundation\Http\FormRequest;

class AuthenticateRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required|max:256'
        ];
    }

    /**
     * @return AuthenticateDto
     */
    public function getDto(): AuthenticateDto
    {
        return new AuthenticateDto(
            $this->get('email'),
            $this->get('password'),
            $this->has('remember')
        );
    }
}
