<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Dmitry Churkin',
                'email' => 'dmitrychurkin1988@gmail.com',
                'password' => Hash::make('dmitrychurkin')
            ],
            [
                'name' => 'Dharani Sivam',
                'email' => 'dharanishivam@gmail.com',
                'password' => Hash::make('dharanishivam')
            ]
        ];

        User::insert($data);
    }
}
