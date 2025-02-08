<?php

namespace App\Actions;

use App\Data\ValidateAuthCodeData;
use Illuminate\Support\Facades\Cache;

final class ValidateAuthCodeAction
{
    public function __invoke(ValidateAuthCodeData $data)
    {
        if (app()->isLocal()) {
            return true;
        }

        $code = Cache::get("code_{$data->email}");

        return ($code && (string) $code === $data->code);
    }
}
