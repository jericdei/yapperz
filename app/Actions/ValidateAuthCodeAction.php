<?php

namespace App\Actions;

use Illuminate\Support\Facades\Cache;

final class ValidateAuthCodeAction
{
    public function __invoke(array $data)
    {
        $code = Cache::get("code_{$data['email']}");

        return $code && (string) $code === $data['code'];
    }
}
