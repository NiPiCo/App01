<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CharacterEpisode extends Pivot
{
    protected $hidden =[
        'character_id','episode_id'
    ];
    public function characters()
    {
        return $this->belongsTo(Character::class,'id','character_id');
    }
    public function episodes()
    {
        return $this->belongsTo(Episode::class,'id','episode_id');
    }
}
