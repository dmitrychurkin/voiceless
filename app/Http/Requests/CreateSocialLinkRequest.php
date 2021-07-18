<?php

namespace App\Http\Requests;

use App\DTOs\CreateSocialLinkDto;
use Illuminate\Foundation\Http\FormRequest;

class CreateSocialLinkRequest extends FormRequest
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
            'name' => 'required|string|max:50',
            'url' => 'required|max:255|unique:social_links,url'
        ];
    }

    /**
     * @return CreateSocialLinkDto
     */
    public function getDto(): CreateSocialLinkDto
    {
        return new CreateSocialLinkDto(
            $this->get('name'),
            $this->get('url')
        );
    }
}
