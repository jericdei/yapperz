import CreatePost from '@/components/create-post';
import PostCard from '@/components/post-card';
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
      <div className="mx-auto max-w-2xl flex-1 p-4">
        <CreatePost />

        <div className="mt-16 space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
