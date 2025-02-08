<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\FriendController;
use App\Http\Controllers\User\FriendRequestController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/post.php';

Route::get('/', HomeController::class)->name('home');

Route::prefix('friends')->as('friends.')->middleware('auth')->group(function () {
    Route::get('/', [FriendController::class, 'index'])->name('index');

    Route::prefix('requests')->as('requests.')->group(function () {
        Route::post('store', [FriendRequestController::class, 'store'])->name('store');
    });
});
