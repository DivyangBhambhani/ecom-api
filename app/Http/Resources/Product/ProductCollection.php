<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $products = [];        
        foreach($this->collection as $product) {
             array_push($products, [
                'name' => $product->name,
                'price' => round($product->price * (1 - ($product->discount/100)), 2),
                'rating' => $product->reviews->count() > 0 ? round($product->reviews->sum('star') / $product->reviews->count(), 2) : 'No Ratings Yet',
                'href' => [
                    'product_link' => route('products.show', ['category'=>$product->category_id,'product'=>$product->id])
                ]
             ]);

        }

        return $products;
    }
}
