<?php

namespace App\Notifications;

use App\Enums\NotificationType;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class FriendRequestSent extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public User $sender) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(): array
    {
        return ['database', 'broadcast'];
    }

    public function toDatabase(User $notifiable): array
    {
        return [
            'type' => NotificationType::FRIEND_REQUEST->value,
            'message' => "{$this->sender->full_name} sent you a friend request.",
            'sender' => $this->sender,
            'receiver' => $notifiable,
        ];
    }

    public function toBroadcast(User $notifiable): BroadcastMessage
    {
        return new BroadcastMessage([
            'type' => NotificationType::FRIEND_REQUEST->value,
            'message' => "{$this->sender->full_name} sent you a friend request.",
            'sender' => $this->sender,
            'receiver' => $notifiable,
        ]);
    }
}
