<?php

namespace App\Http\Resources\Review;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ReviewCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $reviews = [];
        foreach ($this->collection as $review) {
            array_push($reviews, [
                'customer' => $review->customer,
                'description' => $review->review,
                'rating' => $review->star 
            ]);
        }
        return $reviews;
    }

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    
    public function with($request)
    {
        return [
            'href' => [
                'product_link' => route('products.show', ['category' => $request->category->id, 'product' => $this->collection->first()->product_id])
            ]
        ];
    }
}
