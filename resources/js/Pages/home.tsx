import { useCurrentUser } from '@/hooks/auth';
import AuthenticatedLayout from '@/layouts/authenticated';

export default function HomePage() {
  const user = useCurrentUser();

  return (
    <AuthenticatedLayout>
      <p>Hi, {user.first_name}!</p>
    </AuthenticatedLayout>
  );
}
