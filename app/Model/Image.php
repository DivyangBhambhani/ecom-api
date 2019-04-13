<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
	public $table = "image_lib";
    public function product()
    {
    	return $this->belongsTo(Product::class);
    }
}
