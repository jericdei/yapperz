<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request, User $user)
    {
        $request->validate([
            'content' => ['required', 'string'],
        ]);

        $user->posts()->create([
            'content' => $request->input('content'),
        ]);

        return back()->with('success', 'Post created successfully.');
    }
}
