<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name', 'status', 'species', 'gender', 'origin_id', 'location_id', 'image'
    ];

    // Relation zu Origin
    public function origin()
    {
        return $this->belongsTo(Origin::class);
    }

    // Relation zu Location
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
