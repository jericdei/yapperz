<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class GenerateCodeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        /** @var User|null */
        $user = User::query()->firstWhere('email', $request->input('email'));

        if (!$user) {
            throw ValidationException::withMessages([
                'email' => 'Email does not exist.',
            ]);
        }

        $user->sendEmailVerification();

        return to_route('auth.code.validate.create', [
            'user' => $user->id,
        ]);
    }
}
