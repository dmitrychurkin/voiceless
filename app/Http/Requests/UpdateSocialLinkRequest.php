<?php

namespace App\Http\Requests;

use App\DTOs\UpdateSocialLinkDto;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSocialLinkRequest extends FormRequest
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
            'name' => 'required_without_all:url|string|max:50',
            'url' => 'required_without_all:name|max:255|unique:social_links,url'
        ];
    }

    /**
     * @return UpdateSocialLinkDto
     */
    public function getDto(): UpdateSocialLinkDto
    {
        return new UpdateSocialLinkDto(
            $this->get('name'),
            $this->get('url')
        );
    }
}
