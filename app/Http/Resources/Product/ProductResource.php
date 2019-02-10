<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'short_desc' => $this->short_desc,
            'price' => $this->price,
            'stock' => $this->stock,
            'weight' => $this->weight,
            'flavor' => $this->flavor,
            'discount' => $this->discount,
            'effectivePrice' => round($this->price * (1 - ($this->discount/100)), 2),
            'rating' => $this->reviews->count() > 0 ? round($this->reviews->sum('star') / $this->reviews->count(), 2) : 'No Ratings Yet',
            'href' => [
                'reviews_link' => route('reviews.index', ['category'=>$this->category_id,'product'=>$this->id])
            ]
        ];
    }
}
