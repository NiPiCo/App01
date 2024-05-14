<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\CharacterController;
use App\Http\Controllers\CharacterEpisodeController;
use App\Http\Controllers\EpisodeCharacterController;
use App\Http\Controllers\EpisodeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/characters', [CharacterController::class,'index']);
Route::get('/episodes', [EpisodeController::class,'index']);
Route::get('/characters/{id}', [CharacterController::class,'findById']);
Route::get('/test', [TestController::class,'index']);
Route::middleware('api')->group(function () {
    Route::get('/testAPI', [TestController::class,'index']);
});
Route::get('/episodesForCharacter/{id}', [CharacterEpisodeController::class,'episodesForCharacter']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

