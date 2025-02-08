import { User } from './models';

export type NotificationType = 'friend_request' | 'post_comment' | 'post_like';

export interface DatabaseNotification {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: string;
  data: {
    type: NotificationType;
    message: string;
    sender: User;
    receiver: User;
  };
  read_at: string | null;
  created_at: string;
  updated_at: string;
}

export type DatabaseNotifications = DatabaseNotification[];
