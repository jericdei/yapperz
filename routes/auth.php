<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\GenerateCodeController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\ValidatedUserController;
use Illuminate\Support\Facades\Route;

Route::as('auth.')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('register', [RegisteredUserController::class, 'create'])
            ->name('register');

        Route::post('register', [RegisteredUserController::class, 'store']);

        Route::get('login', [AuthenticatedSessionController::class, 'create'])
            ->name('login');

        Route::post('login', [AuthenticatedSessionController::class, 'store']);

        Route::prefix('code')->as('code.')->group(function () {
            Route::post('generate', GenerateCodeController::class)->name('generate');
            Route::get('validate/{user}', [ValidatedUserController::class, 'create'])->name('validate.create');
            Route::post('validate', [ValidatedUserController::class, 'store'])->name('validate.store');
        });
    });

    Route::middleware('auth')->group(function () {
        Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
            ->name('logout');
    });
});
