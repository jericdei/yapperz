<?php

namespace App\Http\Controllers\Auth;

use App\Actions\GenerateAuthCodeAction;
use App\Actions\ValidateAuthCodeAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\ValidationException;

class ValidatedUserController extends Controller
{
    public function create(User $user)
    {
        if (! $user->hasPendingVerification()) {
            return to_route('home');
        }

        return inertia('auth/validate', [
            'user' => $user,
        ]);
    }

    public function store(Request $request, ValidateAuthCodeAction $validateAuthCodeAction)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'code' => ['required'],
        ]);

        $user = User::query()->firstWhere('email', $request->input('email'));

        if (! $user) {
            throw ValidationException::withMessages([
                'email' => 'Invalid email. Please try again.',
            ]);
        }

        if (! $validateAuthCodeAction($request->all())) {
            throw ValidationException::withMessages([
                'code' => 'Invalid verification code. Please try again.',
            ]);
        }

        Cache::forget("code_{$user->email}");
        Auth::login($user);

        return to_route('home');
    }

    public function generate(Request $request, GenerateAuthCodeAction $generateAuthCodeAction)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::query()->firstWhere('email', $request->input('email'));

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => 'Email does not exist.',
            ]);
        }

        $generateAuthCodeAction($request->all());
    }
}
