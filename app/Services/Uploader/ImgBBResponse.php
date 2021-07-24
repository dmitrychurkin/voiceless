<?php

namespace App\Services\Uploader;


final class ImgBBResponse
{
    /*
      $table->char('hashid');
            $table->string('imageUrl');
            $table->string('thumbUrl');
            $table->string('mediumUrl');
            $table->string('deleteUrl');
            $table->char('mime');
            $table->char('extension');
            $table->string('filename');
            $table->string('size');
            $table->string('title')->nullable();
            $table->string('expiration')->nullable();
     */
    private string $id;

    private string $title;

    private string $mime;

    private int $size;

    private string $expiration;

    private string $fileName;

    private string $extension;

    private string $imageUrl;

    private string $thumbUrl;

    private string $mediumUrl;

    private string $deleteUrl;

    public function __construct(array $data)
    {
        $this->id = data_get($data, 'id');
        $this->title = data_get($data, 'title');
        $this->size = data_get($data, 'size');
        $this->expiration = data_get($data, 'expiration');
        $this->mime = data_get($data, 'image.mime');
        $this->fileName = data_get($data, 'image.filename');
        $this->extension = data_get($data, 'image.extension');
        $this->imageUrl = data_get($data, 'image.url');
        $this->thumbUrl = data_get($data, 'thumb.url');
        $this->mediumUrl = data_get($data, 'medium.url', '');
        $this->deleteUrl = data_get($data, 'delete_url');
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function getExpiration()
    {
        return $this->expiration;
    }

    public function getMime()
    {
        return $this->mime;
    }

    public function getFileName()
    {
        return $this->fileName;
    }

    public function getExtension()
    {
        return $this->extension;
    }

    public function getImageUrl()
    {
        return $this->imageUrl;
    }

    public function getThumbUrl()
    {
        return $this->thumbUrl;
    }

    public function getMediumUrl()
    {
        return $this->mediumUrl;
    }

    public function getDeleteUrl()
    {
        return $this->deleteUrl;
    }
}