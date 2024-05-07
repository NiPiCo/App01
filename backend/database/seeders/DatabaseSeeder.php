<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

    use App\Models\Character;
    use App\Models\Origin;
    use App\Models\Location;
class DatabaseSeeder extends Seeder
{
   
    
    
 
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            $origins = [
                [
                    'name' => 'Earth (C-137)',
                    'url' => 'https://rickandmortyapi.com/api/location/1',
                ],
                [
                    'name' => 'Abadango',
                    'url' => 'https://rickandmortyapi.com/api/location/2',
                ],
                [
                    'name' => 'Citadel of Ricks',
                    'url' => 'https://rickandmortyapi.com/api/location/3',
                ],
                [
                    'name' => 'Worldender\'s lair',
                    'url' => 'https://rickandmortyapi.com/api/location/4',
                ],
                [
                    'name' => 'Anatomy Park',
                    'url' => 'https://rickandmortyapi.com/api/location/5',
                ],
            ];
    
            // Daten in die Datenbank einfügen
            foreach ($origins as $origin) {
                Origin::create($origin);
            }
              // Array von Location-Datensätzen
        $locations = [
            [
                'name' => 'Earth (Replacement Dimension)',
                'url' => 'https://rickandmortyapi.com/api/location/20',
            ],
            [
                'name' => 'Abandoned Citadel of Ricks',
                'url' => 'https://rickandmortyapi.com/api/location/21',
            ],
            [
                'name' => 'Testicle Monster Dimension',
                'url' => 'https://rickandmortyapi.com/api/location/22',
            ],
            [
                'name' => 'Cromulon Dimension',
                'url' => 'https://rickandmortyapi.com/api/location/23',
            ],
            [
                'name' => 'Fantasy Dimension',
                'url' => 'https://rickandmortyapi.com/api/location/24',
            ],
        ];

        // Daten in die Datenbank einfügen
        foreach ($locations as $location) {
            Location::create($location);
        }
            // Array von Charakteren aus Rick and Morty
            $characters = [
                [
                    'name' => 'Rick Sanchez',
                    'status' => 'Alive',
                    'species' => 'Human',
                    'gender' => 'Male',
                    'origin_id' => 1, // entsprechend der ID in der "origins" Tabelle
                    'location_id' => 1, // entsprechend der ID in der "locations" Tabelle
                    'image' => 'rick_sanchez.jpg',
                ],
                [
                    'name' => 'Morty Smith',
                    'status' => 'Alive',
                    'species' => 'Human',
                    'gender' => 'Male',
                    'origin_id' => 1,
                    'location_id' => 1,
                    'image' => 'morty_smith.jpg',
                ],
                [
                    'name' => 'Summer Smith',
                    'status' => 'Alive',
                    'species' => 'Human',
                    'gender' => 'Female',
                    'origin_id' => 1,
                    'location_id' => 1,
                    'image' => 'summer_smith.jpg',
                ],
                [
                    'name' => 'Beth Smith',
                    'status' => 'Alive',
                    'species' => 'Human',
                    'gender' => 'Female',
                    'origin_id' => 1,
                    'location_id' => 1,
                    'image' => 'beth_smith.jpg',
                ],
                [
                    'name' => 'Jerry Smith',
                    'status' => 'Alive',
                    'species' => 'Human',
                    'gender' => 'Male',
                    'origin_id' => 1,
                    'location_id' => 1,
                    'image' => 'jerry_smith.jpg',
                ],
                // Füge weitere Charaktere hinzu
            ];
    
            // Daten in die Datenbank einfügen
            foreach ($characters as $character) {
                Character::create($character);
            }
        }
    
    
}
