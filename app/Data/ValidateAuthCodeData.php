<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ValidateAuthCodeData extends Data
{
    public function __construct(
        public string $email,
        public string $code
    ) {}
}
