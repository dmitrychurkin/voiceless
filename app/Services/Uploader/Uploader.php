<?php

namespace App\Services\Uploader;

interface Uploader
{
    public function upload(Uploadable $resource): object;
}
