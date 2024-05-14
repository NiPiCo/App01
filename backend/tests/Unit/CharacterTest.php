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

        $response = $this->get('/api/characters/180');
        dd($response->getData());
        $response->assertStatus(200);
    }
}
