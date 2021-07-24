<?php

namespace App\Providers;

use App\Repositories\User\{User, UserRepository};
use App\Repositories\PasswordReset\{PasswordReset, PasswordResetRepository};
use App\Repositories\Settings\{Settings, SettingsRepository};
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Support\DeferrableProvider;

class RepositoryServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * All of the container singletons that should be registered.
     *
     * @var array
     */
    public $singletons = [
        User::class => UserRepository::class,
        PasswordReset::class => PasswordResetRepository::class,
        Settings::class => SettingsRepository::class
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            User::class,
            PasswordReset::class,
            Settings::class
        ];
    }
}
