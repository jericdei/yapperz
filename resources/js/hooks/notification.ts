import {
  DatabaseNotification,
  DatabaseNotifications,
} from '@/types/notification';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useCurrentUser } from './auth';

export const NOTIFICATIONS_QUERY_KEY = 'notifications';

export function useGetNotifications() {
  return useQuery({
    queryKey: [NOTIFICATIONS_QUERY_KEY],
    queryFn: async () => {
      const response = await axios.get<DatabaseNotifications>(
        route('notifications.index'),
      );

      return response.data;
    },
  });
}

export function useReceiveNotification(
  onReceive: (notification: DatabaseNotification['data']) => void,
) {
  const user = useCurrentUser();
  const channel = `App.Models.User.${user.id}`;

  useEffect(() => {
    window.Echo.private(channel).notification(
      (notification: DatabaseNotification['data']) => {
        onReceive(notification);
      },
    );

    return () => {
      window.Echo.leave(channel);
    };
  }, []);
}
