import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  useGetNotifications,
  useReceiveNotification,
} from '@/hooks/notification';
import { Bell } from 'lucide-react';
import NotificationCard from '../notification-card';

export default function NotificationMenu() {
  const { data: notifications, refetch } = useGetNotifications();

  useReceiveNotification(() => {
    refetch();
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-96">
        <div className="space-y-4">
          <h3>Notifications</h3>

          {/* <pre>{JSON.stringify(notifications, null, 2)}</pre> */}

          {notifications?.map((notification) => (
            <NotificationCard
              key={notification?.id}
              notification={notification}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
