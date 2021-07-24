<?php

namespace App\Services\Uploader;

use Illuminate\Http\UploadedFile;

final class ImgBBResource implements ImgBBAttributes, Uploadable
{
    private UploadedFile $resource;

    private ?string $name;

    private ?int $expiration;

    public function __construct(
        UploadedFile $resource,
        ?string $name = null,
        ?int $expiration = null)
    {
        $this->resource = $resource;
        $this->name = $name;
        $this->expiration = $expiration;
    }

    public function getResource(): UploadedFile
    {
        return $this->resource;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getExpiration(): ?int
    {
        return $this->expiration;
    }
}
