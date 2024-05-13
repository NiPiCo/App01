<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Origin extends Model
{
    protected $fillable = [
        'name', 'url'
    ];

   
    public function characters()
    {
        return $this->hasMany(Character::class,'origin_id');
    }
}
