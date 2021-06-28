<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id'];

    /**
     * Get all social links
     */
    public function socialLinks()
    {
        return $this->hasMany(SocialLink::class);
    }

    /**
     * Get contacts
     */
    public function contactDetails()
    {
        return $this->hasMany(ContactDetail::class);
    }
}
