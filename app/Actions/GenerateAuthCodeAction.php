<?php

namespace App\Actions;

use App\Data\GenerateAuthCodeData;
use App\Mail\AuthCodeGenerated;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

final class GenerateAuthCodeAction
{
    public function __invoke(GenerateAuthCodeData $data)
    {
        $code = Cache::remember("code_{$data->email}", now()->addMinutes(10), fn() => mt_rand(10000, 99999));

        Mail::to($data->email)->send(new AuthCodeGenerated($data->first_name, $code));
    }
}
