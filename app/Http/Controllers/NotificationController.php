<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        /** @var User */
        $user = $request->user();

        return $user->notifications()
            ->getQuery()
            ->get();
    }
}
