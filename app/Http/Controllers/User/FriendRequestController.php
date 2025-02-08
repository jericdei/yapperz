<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\FriendRequestSent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FriendRequestController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => ['required', 'exists:users,id'],
        ]);

        /** @var User */
        $user = Auth::user();

        $user->friendRequests()->attach([
            'friend_id' => $request->input('user_id'),
        ]);

        /** @var User */
        $friend = User::find($request->input('user_id'));

        $friend->notify(new FriendRequestSent($user));

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Friend request sent.',
        ]);
    }

    public function accept(Request $request)
    {
        $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'friend_id' => ['required', 'exists:users,id'],
        ]);

        /** @var User */
        $user = User::find($request->input('user_id'));

        $user->friendRequests()->updateExistingPivot($request->input('friend_id'), [
            'accepted' => true,
        ]);

        return back()->with('toast', [
            'type' => 'success',
            'message' => 'Friend request accepted.',
        ]);
    }
}
