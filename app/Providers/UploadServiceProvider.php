<?php

namespace App\Providers;

use App\Services\Uploader\{Uploader, ImgBBService, ImgBBConfig};
use GuzzleHttp\Client;
use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

final class UploadServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Uploader::class, function () {
            $uploader = config('uploader');
            $driver = $uploader['default'];
            [
                'key' => $key,
                'endpoint' => $endpoint,
                'expiration' => $expiration
            ] = $uploader['drivers'][$driver];

            return new ImgBBService(
                new ImgBBConfig(
                    $key,
                    $endpoint,
                    $expiration
                ),
                new Client()
            );
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [Uploader::class];
    }
}
