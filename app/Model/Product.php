<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	protected $fillable = [
		'name','category','weight','price','stock','discount','short_desc','long_desc','brand','manufacturer','type','isSugarfree','flavor','isVegan','ingredients'
	];

	public function category()
    {
    	return $this->belongsTo(Category::class);
    }
    
    public function reviews()
    {
    	return $this->hasMany(Review::class);
    }
}
