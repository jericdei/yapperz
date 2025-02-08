<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\User\FriendController;
use App\Http\Controllers\User\FriendRequestController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/post.php';

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::prefix('friends')->as('friends.')->group(function () {
        Route::get('/', [FriendController::class, 'index'])->name('index');

        Route::prefix('requests')->as('requests.')->group(function () {
            Route::post('store', [FriendRequestController::class, 'store'])->name('store');
            Route::post('accept', [FriendRequestController::class, 'accept'])->name('accept');
            Route::post('decline', [FriendRequestController::class, 'decline'])->name('decline');
        });
    });

    Route::prefix('notifications')->as('notifications.')->group(function () {
        Route::get('/', [NotificationController::class, 'index'])->name('index');
    });
});
