<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class AddReviewTitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->update([
        	'title' => 'Review Title Goes Here'
        ]);
    }
}
