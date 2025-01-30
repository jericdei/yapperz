<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class GenerateAuthCodeData extends Data
{
    public function __construct(
        public string $email,
        public string $first_name,
    ) {}
}
