<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('url');
            $table->timestamps();
        });

        Schema::create('episodes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('url');
            $table->timestamps();
        });

        Schema::create('origins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('url');
            $table->timestamps();
        });


        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('status');
            $table->string('species');
            $table->string('gender');
            $table->unsignedBigInteger('origin_id');
            $table->foreign('origin_id')->references('id')->on('origins');
            $table->unsignedBigInteger('location_id');
            $table->foreign('location_id')->references('id')->on('locations');
            $table->string('image');
            $table->timestamps();
        });

        Schema::create('character_episode', function (Blueprint $table) {
            $table->unsignedBigInteger('character_id');
            $table->foreign('character_id')->references('id')->on('characters')->onDelete('cascade');
            $table->unsignedBigInteger('episode_id');
            $table->foreign('episode_id')->references('id')->on('episodes')->onDelete('cascade');
            $table->timestamps();
            $table->primary(['character_id', 'episode_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('locations');
        Schema::dropIfExists('episodes');
        Schema::dropIfExists('origins');
        Schema::dropIfExists('characters');
        Schema::dropIfExists('character_episode');
    }
};

