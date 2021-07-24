<?php

namespace App\Services\Uploader;

final class ImgBBConfig
{
    private string $key;

    private string $endpoint;

    private ?int $expiration;

    public function __construct(
        string $key,
        string $endpoint,
        ?int $expiration)
    {
        $this->key = $key;
        $this->expiration = $expiration;
        $this->endpoint = $endpoint;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getExpiration(): ?int
    {
        return $this->expiration;
    }

    public function getEndpoint(): string
    {
        return $this->endpoint;
    }
}
