<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Character;

class CharacterController extends Controller
{
    /**
     * Zeige eine Liste aller Charaktere an.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Alle Charaktere aus der Datenbank abrufen
        $characters = Character::all();

        // JSON-Antwort mit den Charakteren zurückgeben
        return response()->json($characters);
    }
}
