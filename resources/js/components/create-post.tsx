import InertiaTextarea from '@/components/form/InertiaTextarea';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { useCurrentUser } from '@/hooks/auth';
import { useToast } from '@/hooks/use-toast';
import { CreatePost as CreatePostSchema } from '@/types/schema';
import { useForm } from '@inertiajs/react';

interface CreatePostProps {}

export default function CreatePost({}: CreatePostProps) {
  const user = useCurrentUser();
  const { toast } = useToast();

  const { data, post, reset, setData, errors, hasErrors } =
    useForm<CreatePostSchema>({
      content: '',
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('posts.store', { user: user.id }), {
      onFinish: () => reset(),
      onError: (error) => {
        if ('content' in error) {
          toast({
            title: 'Error',
            description: error.content,
            variant: 'destructive',
          });
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Card>
        <CardHeader>
          <InertiaTextarea<CreatePostSchema>
            name="content"
            placeholder={`What's on your mind, ${user.first_name}?`}
            value={data.content}
            setData={setData}
          />
        </CardHeader>

        <CardFooter>
          <Button>Post</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
