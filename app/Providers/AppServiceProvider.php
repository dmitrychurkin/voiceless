<?php

namespace App\Providers;

use App\Services\Auth\{Auth, AuthService};
use App\Services\BankAccount\{BankAccount, BankAccountService};
use App\Services\ContactDetail\{ContactDetail, ContactDetailService};
use App\Services\Settings\{Settings, SettingsService};
use App\Services\SocialLink\{SocialLink, SocialLinkService};
use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * All of the container singletons that should be registered.
     *
     * @var array
     */
    public $singletons = [
        Auth::class => AuthService::class,
        BankAccount::class => BankAccountService::class,
        ContactDetail::class => ContactDetailService::class,
        Settings::class => SettingsService::class,
        SocialLink::class => SocialLinkService::class
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

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            Auth::class,
            BankAccount::class,
            ContactDetail::class,
            Settings::class,
            SocialLink::class
        ];
    }
}
