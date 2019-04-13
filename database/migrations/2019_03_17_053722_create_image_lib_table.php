<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImageLibTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_lib', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id');
            $table->binary('image');
            $table->string('status');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE image_lib MODIFY image MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('image_lib');
    }
}
