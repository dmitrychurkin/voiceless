<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactDetail extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['phone', 'email', 'address', 'contactPerson'];

    /**
     * Get settings
     */
    public function settings()
    {
        return $this->belongsTo(Settings::class);
    }
}
