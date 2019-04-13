<?php

use Illuminate\Database\Seeder;

class ImageLibTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Model\Image::class, 250)->create();
    }
}
