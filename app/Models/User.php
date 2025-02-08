<?php

namespace App\Models;

use App\Actions\GenerateAuthCodeAction;
use App\Data\GenerateAuthCodeData;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, SoftDeletes, HasUlids;

    protected $guarded = ['id'];

    protected $hidden = [
        'remember_token',
    ];

    protected $appends = ['full_name'];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
        ];
    }

    public function fullName(): Attribute
    {
        return Attribute::make(
            get: fn(): string => collect([$this->first_name, $this->middle_name, $this->last_name])->filter()->implode(' '),
        );
    }

    /**
     * Generate auth code and send email verification to the user.
     */
    public function sendEmailVerification()
    {
        $action = app(GenerateAuthCodeAction::class);
        $action(GenerateAuthCodeData::from($this));
    }

    public function hasPendingVerification(): bool
    {
        return Cache::has("code_{$this->email}");
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function friends(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id');
    }

    public function acceptedFriends(): BelongsToMany
    {
        return $this->friends()->wherePivot('accepted', true);
    }

    public function friendRequests(): BelongsToMany
    {
        return $this->friends()->wherePivot('accepted', false);
    }

    public function isFriendRequestSent(): Attribute
    {
        /** @var User|null */
        $user = Auth::user();

        return Attribute::make(
            get: fn(): bool => $user?->friendRequests()
                ->getQuery()
                ->where('friend_id', $this->id)
                ->exists()
        );
    }
}
