import { User } from '@/types/models';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '../ui/button';

interface AddFriendProps {
  userId: User['id'];
  sent: boolean;
}

export default function AddFriend({ userId, sent }: AddFriendProps) {
  const [loading, setLoading] = useState(false);

  const handleAddFriend = () => {
    router.post(
      route('friends.requests.store'),
      {
        user_id: userId,
      },
      {
        onProgress: () => setLoading(true),
        onFinish: () => {
          setLoading(false);
        },
      },
    );
  };

  return (
    <Button onClick={handleAddFriend} disabled={loading || sent}>
      {sent ? 'Request Sent' : 'Add Friend'}
    </Button>
  );
}
