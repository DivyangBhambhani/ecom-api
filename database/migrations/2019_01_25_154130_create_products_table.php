<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->tinyInteger('category');
            $table->integer('weight');
            $table->integer('price');
            $table->integer('stock');
            $table->integer('discount');
            $table->text('short_desc',250);
            $table->longText('long_desc');
            $table->string('brand');
            $table->string('manufacturer');
            $table->tinyInteger('type');
            $table->boolean('isSugarfree');
            $table->string('flavor');
            $table->boolean('isVegan');
            $table->text('ingredients');
            $table->timestamps();            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
