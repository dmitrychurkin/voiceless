<?php

namespace App\Providers;

use App\Services\Uploader\Uploader;
use App\Services\Uploader\ImgBB\ImgBBService;
use GuzzleHttp\Client;
use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

final class UploadServiceProvider extends ServiceProvider implements DeferrableProvider
{
    private static array $drivers = [
        'imgBB' => ImgBBService::class
    ];

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

            return new self::$drivers[$driver](
                data_get($uploader, "drivers.{$driver}"),
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
