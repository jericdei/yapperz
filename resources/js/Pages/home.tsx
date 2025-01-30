import { Button } from '@/components/ui/button';
import { User } from '@/types/models';
import { router } from '@inertiajs/react';

interface HomePageProps {
  user: User;
}

export default function HomePage({ user }: HomePageProps) {
  const handleLogout = () => {
    router.post(route('auth.logout'));
  };

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
