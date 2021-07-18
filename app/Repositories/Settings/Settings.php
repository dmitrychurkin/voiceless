<?php

namespace App\Repositories\Settings;

use App\Queries\SettingsQueries;
use Illuminate\Database\Eloquent\Model;

interface Settings extends SettingsQueries
{
    public function create(array $settingsToCreate, string $modelClass): object;

    public function update(array $settingsToUpdate, Model $model): bool;

    public function delete(Model $model): ?bool;
}
