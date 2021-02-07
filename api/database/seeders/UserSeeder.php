<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's user.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Lucas Furlan',
            'email' => 'furlan@hotmail.com.br',
            'password' => Hash::make('123456'),
        ]);
    }
}

