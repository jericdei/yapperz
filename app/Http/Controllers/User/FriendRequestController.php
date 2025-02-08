<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FriendRequestController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => ['required', 'exists:users,id'],
        ]);

        /** @var User */
        $user = $request->user();

        $user->friendRequests()->attach([
            'friend_id' => $request->input('user_id'),
        ]);

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Friend request sent.',
        ]);
    }
}
