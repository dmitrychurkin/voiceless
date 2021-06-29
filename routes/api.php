<?php

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return new UserResource($request->user());
    });

    Route::apiResource('settings', SettingsController::class)
        ->only(['index']);
    Route::apiResource('contact-details', ContactDetailController::class)
        ->only(['store', 'update', 'destroy']);
    Route::apiResource('social-links', SocialLinkController::class)
        ->only(['store', 'update', 'destroy']);
    Route::apiResource('bank-account', BankAccountController::class)
        ->only(['store', 'update', 'destroy']);
});

Route::post('/contacts', ContactFormController::class);
