<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Character;
use App\Models\Location;

class CharacterController extends Controller
{
    /**
     * Zeige eine Liste aller Charaktere an.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Character::query();
    
       
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }
    
       
        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }
    
        
        $characters = $query->with('location')->with('origin')->paginate(20);
      
        
        $nextPageUrl = $characters->nextPageUrl();
        $data = [
            'info' => [
                'count' => $characters->total(),
                'pages' => $characters->lastPage(),
                'next' => $nextPageUrl,
                'prev' => $characters->previousPageUrl(),
            ],
            'results' => $characters->items(),
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
