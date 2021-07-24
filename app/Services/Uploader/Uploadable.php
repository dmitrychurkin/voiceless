<?php

namespace App\Services\Uploader;

use Illuminate\Http\UploadedFile;

interface Uploadable
{
    public function getResource(): UploadedFile;
}
