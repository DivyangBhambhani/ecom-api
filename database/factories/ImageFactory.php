<?php

use Faker\Generator as Faker;
use App\Model\Product;

$factory->define(App\Model\Image::class, function (Faker $faker) {
    // $imgNum = $faker->numberBetween($min = 1, $max = 30);
    // $file = file_get_contents("http://localhost:8000/img/product/30.jpg");
    // Get the contents of the file
    // ;
    return [
        'product_id' => function () {
    		return Product::all()->random();
    	},
        'image' => base64_encode(file_get_contents("http://127.0.0.1:8000/img/product/".$faker->numberBetween($min = 1, $max = 20).".jpg")),
        'status' => $faker->randomElement(array("ACTIVE","INACTIVE"))
    ];
});