<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    public function edit()
    {
        return inertia('user/profile/edit');
    }
}
