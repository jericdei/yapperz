import { User } from '@/types/models';
import { Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import UserAvatar from '../user-avatar';
import AddFriend from './add-friend';

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <UserAvatar user={user} />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{user.full_name}</h2>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 opacity-70" />
          <span className="text-sm">{user.email}</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Message</Button>
        <AddFriend userId={user.id} sent={user.is_friend_request_sent} />
      </CardFooter>
    </Card>
  );
}
