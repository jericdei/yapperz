import UserCard from '@/components/user/user-card';
import AuthenticatedLayout from '@/layouts/authenticated';
import { User } from '@/types/models';

interface FriendsPageProps {
  friends: User[];
  mayKnow: User[];
}

export default function FriendsPage({ friends, mayKnow }: FriendsPageProps) {
  return (
    <AuthenticatedLayout title="Friends">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2>Your friends</h2>

          {friends.length === 0 && (
            <p className="text-muted-foreground">
              You don&apos;t have any friends yet.
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            {friends.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2>People you may know</h2>

          <div className="grid grid-cols-2 gap-4">
            {mayKnow.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
