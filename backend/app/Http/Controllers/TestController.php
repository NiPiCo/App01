<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Hello from Laravel API']);
    }
}
