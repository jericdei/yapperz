<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $others = User::factory(10)->create();
        $me = User::factory()->create([
            'first_name' => 'Dei',
            'middle_name' => null,
            'last_name' => 'Logan',
            'username' => 'jericdei',
            'is_private' => false,
            'email' => 'loganjeric25@gmail.com',
        ]);

        $users = [$me, ...$others];

        Post::factory(50)->recycle($users)->create();
    }
}
