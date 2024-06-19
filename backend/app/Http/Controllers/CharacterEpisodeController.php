<?php

namespace App\Http\Controllers;
use App\Models\CharacterEpisode;

class CharacterEpisodeController extends Controller
{
    public function episodesForCharacter($characterId)
    {
        // Alle Einträge aus der Pivot-Tabelle abrufen, die den angegebenen Charakter enthalten
        $episodesForCharacter = CharacterEpisode::where('character_id', $characterId)
            ->with('episodes', 'characters')
            ->get();
        return $episodesForCharacter;
    }
}