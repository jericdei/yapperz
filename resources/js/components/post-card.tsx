import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/auth';
import { Post } from '@/types/models';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle, Share2, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import UserAvatar from './user-avatar';

interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  const user = useCurrentUser();

  const [likeCount, setLikeCount] = useState(post.like_count);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className="mx-auto w-full max-w-xl bg-white dark:bg-neutral-800">
      <CardHeader className="flex flex-row items-center gap-4">
        <UserAvatar user={post.user} />
        <div className="flex flex-col">
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            {post.user.full_name}
          </span>

          {post.updated_at && (
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {formatDistanceToNow(new Date(post.updated_at)) + ' ago'}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-700 dark:text-neutral-300">{post.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={
              isLiked
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-neutral-500 dark:text-neutral-400'
            }
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            {likeCount}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-neutral-500 dark:text-neutral-400"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {/* {comments} */}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-neutral-500 dark:text-neutral-400"
          >
            <Share2 className="mr-2 h-4 w-4" />
            {/* {shares} */}
          </Button>
        </div>
        <div className="flex w-full gap-2">
          <UserAvatar user={user} />
          <Input
            placeholder="Write a comment..."
            className="flex-grow bg-neutral-100 dark:bg-neutral-700 dark:text-neutral-100"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
