<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->char('hashid');
            $table->string('url');
            $table->string('thumb');
            $table->char('mime');
            $table->char('extension');
            $table->string('filename');
            $table->string('size');
            $table->string('medium')->nullable();
            $table->string('title')->nullable();
            $table->string('expiration')->nullable();
            $table->timestamps();

            // 1:M image in album
            $table->foreignId('album_id')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media');
    }
}
