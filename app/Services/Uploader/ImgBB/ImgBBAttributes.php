<?php

namespace App\Services\Uploader\ImgBB;

interface ImgBBAttributes
{
    public function getName(): ?string;

    public function getExpiration(): ?int;
}
