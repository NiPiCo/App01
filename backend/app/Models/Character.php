<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name', 'status', 'species', 'gender', 'image',
    ];
    protected $hidden =[
        'origin_id','location_id'
    ];

    // Relation zu Origin
    public function origin()
    {
        return $this->hasOne(Location::class,'id','origin_id');
    }

    // Relation zu Location
    public function location()
    {
        return $this->hasOne(Location::class,'id','location_id');
    }
}
