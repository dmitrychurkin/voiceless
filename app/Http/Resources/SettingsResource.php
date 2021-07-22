<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'socialLinks' => $this->socialLinks
                ->map(fn ($socialLink) => new SocialLinkResource($socialLink)),
            'contactDetails' => $this->contactDetails
                ->map(fn ($contactDetail) => new ContactDetailResource($contactDetail)),
            'bankAccounts' => $this->bankAccounts
                ->map(fn ($bankAccount) => new BankAccountResource($bankAccount))
        ];
    }
}
