<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Character;


class CharacterTest extends TestCase
{
    public function test_get_all_characters()
    {
    
        $response = $this->get('/api/characters'); 
    
        $response->assertStatus(200);

        $response->assertJsonCount(5);

        $response->assertJsonStructure([
            '*' => ['id', 'name', 'status', 'species', 'gender', 'origin_id', 'location_id', 'image', 'created_at', 'updated_at'],
        ]);
    }
}
