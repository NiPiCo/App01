<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Character;
use App\Models\Episode;
use App\Models\Location;

class EpisodeController extends Controller
{
    /**
     * Zeige eine Liste aller Charaktere an.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Episode::query();
        $episodes = $query->paginate(20);
        $nextPageUrl = $episodes->nextPageUrl();
        $data = [
            'info' => [
                'count' => $episodes->total(),
                'pages' => $episodes->lastPage(),
                'next' => $nextPageUrl,
                'prev' => $episodes->previousPageUrl(),
            ],
            'results' => $episodes->items(),
        ];
  
        return response()->json($data);
    }

    public function findById($id)
    {
    
        $character = Character::find($id);

        if($character->origin_id){
            $character->origin = Location::find($character->origin_id);
        }

        if($character->location_id){
            $character->location = Location::find($character->location_id);
        }

        if (!$character) {
            return response()->json(['error' => 'Character not found'], 404);
        }
        return response()->json($character);
    }

    
}
