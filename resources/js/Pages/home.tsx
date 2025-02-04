import CreatePost from '@/components/create-post';
import UserAvatar from '@/components/user-avatar';
import { useCurrentUser } from '@/hooks/auth';
import AuthenticatedLayout from '@/layouts/authenticated';

export default function HomePage() {
  const user = useCurrentUser();

  return (
    <AuthenticatedLayout>
      <section className="flex items-center gap-8">
        <div className="flex min-w-72 flex-col gap-4">
          <div className="flex items-center gap-4">
            <UserAvatar />
            <p className="font-bold">{user.full_name}</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="mx-auto w-3/4">
            <CreatePost />
          </div>
        </div>

        <div className="min-w-72">
          <h2>Contacts</h2>
        </div>
      </section>
    </AuthenticatedLayout>
  );
}
