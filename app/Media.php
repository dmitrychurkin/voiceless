<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    /** Album association */
    public function album()
    {
        return $this->belongsTo(Album::class);
    }
}
