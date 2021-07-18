<?php

namespace App\Repositories\Settings;

use App\Settings as SettingsModel;
use Illuminate\Database\Eloquent\Model;

final class SettingsRepository implements Settings
{
    public function getSettingsByIdOrCreate(int $id): SettingsModel
    {
        return SettingsModel::firstOrCreate(
            ['id' => $id]
        );
    }

    public function create(array $settingsToCreate, string $modelClass): object
    {
        return $modelClass::create($settingsToCreate);
    }

    public function update(array $settingsToUpdate, Model $model): bool
    {
        foreach($settingsToUpdate as $key => $value) {
            if (filled($value)) {
                $model[$key] = $value;
            }
        }

        return $model->save();
    }

    public function delete(Model $model): ?bool
    {
        return $model->delete();
    }
}
