<?php

namespace App\DTOs;

final class CreateSocialLinkDto
{
    /** @var string */
    private string $name;

    /** @var string */
    private string $url;

    public function __construct(
        string $name,
        string $url)
    {
        $this->name = $name;
        $this->url = $url;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getUrl(): string
    {
        return $this->url;
    }
}
