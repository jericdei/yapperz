<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FriendController extends Controller
{
    public function index(Request $request)
    {
        /** @var User */
        $user = $request->user();
        $userSelect = ['id', 'email', 'username', 'first_name', 'middle_name', 'last_name'];

        $friends = $user->acceptedFriends()
            ->get($userSelect);

        $mayKnow = User::query()
            ->whereIsPrivate(false)
            ->whereNot('id', $user->id)
            ->get($userSelect);

        $mayKnow->append('is_friend_request_sent');

        return inertia('user/friends/index', [
            'friends' => $friends,
            'mayKnow' => $mayKnow,
        ]);
    }
}
