<?php

namespace App\Services\Uploader;

interface ImgBBAttributes
{
    public function getName(): ?string;

    public function getExpiration(): ?int;
}
