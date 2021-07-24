<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    /**Album cover image */
    public function cover()
    {
        return $this->belongsTo(Media::class);
    }

    /** Media items associated with album */
    public function media()
    {
        return $this->hasMany(Media::class);
    }
}
