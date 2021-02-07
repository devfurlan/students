<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class StudentsSeeder extends Seeder
{
    /**
     * Seed the application's students.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 30) as $i) {
            \App\Models\Students::create([
                'name' => $faker->name,
                'birth' => $faker->date(),
                'gender' => $faker->boolean ? 'M' : 'F',
                'cpf' => $faker->unique()->numberBetween(11111111111, 45599999999),
                'grade' => "{$faker->randomDigitNot(0)}º ano",
                'class' => $faker->randomElement(['A','B','C','D']),
                'email' => $faker->unique()->safeEmail,
            ]);
        }
    }
}

