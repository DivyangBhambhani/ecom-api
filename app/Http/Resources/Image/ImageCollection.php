<?php

namespace App\Http\Resources\Image;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ImageCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $images = [];
        foreach ($this->collection as $image) {
            array_push($images, [
                'id' => $image->id,
                'image' => $image->image,
                'status' => $image->status,
                'modifyDate' => date('d F Y', strtotime($image->updated_at))
            ]);
        }
        return $images;
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
