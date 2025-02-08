<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::prefix('posts')->as('posts.')->middleware('auth')->group(function () {
    Route::post('{user}', [PostController::class, 'store'])->name('store');
});
