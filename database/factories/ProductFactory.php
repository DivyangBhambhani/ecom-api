<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
		'category' => $faker->randomElement(array(1,2,3,4,5)),
		'weight' => $faker->numberBetween(100,1000),
		'price' => $faker->numberBetween(100,1000),
		'stock' => $faker->numberBetween(0,10),
		'discount' => $faker->numberBetween(10,50),
		'short_desc' => $faker->text(250),
		'long_desc' => $faker->paragraph,
		'brand' => "Dr. Kiran's Heilmittel",
		'manufacturer' => "Heilmittel Health Corp.",
		'type' => 1,
		'isSugarfree' => $faker->randomElement(array(0,1)),
		'flavor' => $faker->randomElement(array("Tooty Fruity","Vanilla","Chocolate","Multigrain")),
		'isVegan' => $faker->randomElement(array(0,1)),
		'ingredients' => $faker->sentence(6, false)
    ];
});
