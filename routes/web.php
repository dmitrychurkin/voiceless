<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'dharani')->name('home');
Route::view('/contacts', 'contacts')->name('contacts');

/**Admin routes */
Route::prefix('admin')->group(function () {
    Route::redirect('', '/admin/dashboard');

    // Login routes
    Route::view('login', 'admin')->middleware('guest')->name('login');
    Route::post('login', [AuthController::class, 'authenticate'])->name('signin');

    // Password reset routes
    Route::view('forgot-password', 'admin')->middleware('guest')->name('password.request');
    Route::post('forgot-password', [AuthController::class, 'forgot'])->name('password.email');
    Route::get('/reset-password/{token}', [AuthController::class, 'showPasswordReset'])->name('password.reset');
    Route::post('/reset-password', [AuthController::class, 'reset'])->name('password.update');

    // Dashboard
    Route::middleware('auth:sanctum')->group(function () {
        Route::view('dashboard', 'admin')->name('dashboard');
    });
});

/** Programmatically run artisan commands */
