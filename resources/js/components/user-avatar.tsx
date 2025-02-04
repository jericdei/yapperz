import { Avatar } from '@/components/ui/avatar';
import { useCurrentUser } from '@/hooks/auth';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { UserRoundIcon } from 'lucide-react';

interface UserAvatarProps {}

// TODO: add user avatar
export default function UserAvatar({}: UserAvatarProps) {
  const user = useCurrentUser();

  return (
    <Avatar className="grid place-items-center bg-white">
      <AvatarFallback>
        <UserRoundIcon size={24} className="text-neutral-950" />
      </AvatarFallback>
    </Avatar>
  );
}
