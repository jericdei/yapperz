import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { logoutUser } from '@/hooks/auth';
import { User } from '@/types/models';
import UserAvatar from '../user-avatar';

interface UserMenuProps {
  user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="cursor-pointer">
          <UserAvatar user={user} />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="flex flex-col items-center gap-4">
          <div>
            <p className="font-medium">{user.full_name}</p>
          </div>

          <Button className="w-full" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
