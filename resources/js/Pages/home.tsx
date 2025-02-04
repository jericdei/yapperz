import CreatePost from '@/components/create-post';
import PostCard from '@/components/post-card';
import UserAvatar from '@/components/user-avatar';
import { useCurrentUser } from '@/hooks/auth';
import AuthenticatedLayout from '@/layouts/authenticated';
import { Post } from '@/types/models';

interface HomePageProps {
  posts: Post[];
}

export default function HomePage({ posts }: HomePageProps) {
  const user = useCurrentUser();

  return (
    <AuthenticatedLayout>
      <section className="flex">
        <div className="flex min-w-72 flex-col justify-start gap-4">
          <div className="flex items-center gap-4">
            <UserAvatar user={user} />
            <p className="font-bold">{user.full_name}</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="mx-auto w-3/4">
            <CreatePost />
          </div>

          <div className="mt-16 flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="min-w-72">
          <h2>Contacts</h2>
        </div>
      </section>
    </AuthenticatedLayout>
  );
}
