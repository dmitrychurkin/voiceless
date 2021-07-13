<?php

namespace App\Providers;

use App\Repositories\User\{User, UserRepository};
use App\Repositories\PasswordReset\{PasswordReset, PasswordResetRepository};
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        User::class => UserRepository::class,
        PasswordReset::class => PasswordResetRepository::class
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
