<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', fn(Request $request) => $request->user() ? inertia('home', ['user' => $request->user()]) : to_route('auth.login'))
    ->name('home');

require __DIR__ . '/auth.php';
