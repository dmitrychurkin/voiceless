<?php

namespace App\Services\Uploader;

use App\Exceptions\UploaderException;
use GuzzleHttp\ClientInterface;


final class ImgBBService implements Uploader
{

    private ImgBBConfig $config;

    private ClientInterface $httpClient;

    public function __construct(
        ImgBBConfig $config,
        ClientInterface $httpClient
    ) {
        $this->config = $config;
        $this->httpClient = $httpClient;
    }

    public function upload(Uploadable $resource): ImgBBResponse
    {
        $file = $resource->getResource();
        $filePath = $file->getPathName();

        $name = null;
        $expiration = null;

        if ($resource instanceof ImgBBAttributes) {
            $name = $resource->getName();
            $expiration = $resource->getExpiration();
        }

        $response = $this->httpClient->request(
            'POST',
            $this->config->getEndpoint(),
            [
                'headers' => [
                    'content-type' => 'application/x-www-form-urlencoded'
                ],
                'form_params' => [
                    'image' => base64_encode(file_get_contents($file->path($filePath)))
                ],
                'query' => [
                    'key' => $this->config->getKey(),
                    'name' => $name,
                    'expiration' => $expiration ?: $this->config->getExpiration()
                ],
                'http_errors' => false
            ]
        );

        $statusCode = $response->getStatusCode();
        $responseContents = json_decode($response->getBody()->getContents(), true);

        if ($statusCode > 300) {
            throw new UploaderException($statusCode, data_get($responseContents, 'error.message', 'Bad request'));
        }

        return new ImgBBResponse(data_get($responseContents, 'data'));
    }
}
