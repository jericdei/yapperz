<?php

namespace App\Actions;

use App\Data\ValidateAuthCodeData;
use Illuminate\Support\Facades\Cache;

final class ValidateAuthCodeAction
{
    public function __invoke(ValidateAuthCodeData $data)
    {
        $code = Cache::get("code_{$data->email}");

        return $code && (string) $code === $data->code;
    }
}
