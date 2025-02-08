<?php

use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::prefix('users')->as('users.')->middleware('auth')->group(function () {
    Route::prefix('profile')->as('profile.')->group(function () {
        Route::get('edit', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('update', [ProfileController::class, 'update'])->name('update');
    });
});
