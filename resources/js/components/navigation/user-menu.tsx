import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { logoutUser } from '@/hooks/auth';
import { User } from '@/types/models';
import { Link } from '@inertiajs/react';
import { UserPenIcon } from 'lucide-react';
import UserAvatar from '../user-avatar';

interface UserMenuProps {
  user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <UserAvatar user={user} />
          <span className="sr-only">Profile</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-80">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <UserAvatar user={user} />
            <p className="font-medium">{user.full_name}</p>
          </div>

          <hr />

          <div className="flex w-full flex-col items-center gap-4">
            <Link
              href={route('users.profile.edit')}
              className="flex w-full gap-2 rounded-md px-4 py-2 hover:bg-neutral-700"
            >
              <UserPenIcon />
              <span>Edit Profile</span>
            </Link>
          </div>

          <Button className="w-full" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
