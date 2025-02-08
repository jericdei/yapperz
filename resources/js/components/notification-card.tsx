import { Card, CardContent } from '@/components/ui/card';
import UserAvatar from '@/components/user-avatar';
import { DatabaseNotification } from '@/types/notification';
import { router } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from './ui/button';

interface NotificationCardProps {
  notification?: DatabaseNotification;
}

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  const icon = useMemo(() => {
    switch (notification.data.type) {
      case 'post_like':
        return <Heart className="h-4 w-4 text-red-500" />;
      case 'post_comment':
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'friend_request':
        return <UserPlus className="h-4 w-4 text-green-500" />;
      default:
        return <Bell className="h-4 w-4 text-yellow-500" />;
    }
  }, [notification?.data.type]);

  const actions = useMemo(() => {
    const friendRequestData = {
      user_id: notification?.data.sender?.id,
      friend_id: notification?.data.receiver?.id,
    };

    switch (notification?.data.type) {
      case 'friend_request':
        return (
          <div className="flex items-center space-x-2">
            <Button
              onClick={() =>
                router.post(route('friends.requests.accept'), friendRequestData)
              }
            >
              Accept
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                router.post(
                  route('friends.requests.decline'),
                  friendRequestData,
                )
              }
            >
              Decline
            </Button>
          </div>
        );

      default:
        return null;
    }
  }, [notification]);

  return (
    <Card className="relative w-full max-w-md">
      <CardContent className="flex items-start space-x-4 p-4">
        <UserAvatar user={notification?.data.sender} />
        <div className="flex-1 space-y-4">
          <p className="text-sm font-medium leading-none">
            {notification?.data.message}
          </p>

          <div className="flex items-center space-x-2">
            {icon}
            {notification?.created_at && (
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(notification.created_at)}
              </p>
            )}
          </div>

          <div>{actions}</div>
        </div>
      </CardContent>
    </Card>
  );
}
