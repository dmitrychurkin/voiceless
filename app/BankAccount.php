<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['bankName', 'accountName', 'accountNumber'];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'settings_id' => 1
    ];

    /**
     * Get settings
     */
    public function settings()
    {
        return $this->belongsTo(Settings::class, 'settings_id');
    }
}
