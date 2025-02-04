<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if (!$request->user()) {
            return to_route('auth.login');
        }

        return inertia('home', [
            'posts' => $request->user()
                ->posts()
                ->with('user:id,first_name,middle_name,last_name')
                ->latest()
                ->get(['id', 'user_id', 'content', 'updated_at']),
        ]);
    }
}
