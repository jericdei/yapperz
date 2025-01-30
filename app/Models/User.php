<?php

namespace App\Models;

use App\Actions\GenerateAuthCodeAction;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Cache;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, SoftDeletes, HasUlids;

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
        ];
    }

    public function sendEmailVerification()
    {
        $action = app(GenerateAuthCodeAction::class);

        $action([
            'email' => $this->email,
            'first_name' => $this->first_name,
        ]);
    }

    public function hasPendingVerification(): bool
    {
        return Cache::has("code_{$this->email}");
    }
}
