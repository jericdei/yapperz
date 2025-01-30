import { Avatar } from '@/components/ui/avatar';
import { User } from '@/types/models';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { UserRoundIcon } from 'lucide-react';

interface UserAvatarProps {
  user: User;
}

// TODO: add user avatar
export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar className="grid place-items-center bg-white">
      <AvatarFallback>
        <UserRoundIcon size={100} className="text-neutral-950" />
      </AvatarFallback>
    </Avatar>
  );
}
