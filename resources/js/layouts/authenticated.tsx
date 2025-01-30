import UserMenu from '@/components/navigation/user-menu';
import { useCurrentUser } from '@/hooks/auth';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface AuthenticatedLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function AuthenticatedLayout({
  title,
  children,
}: AuthenticatedLayoutProps) {
  const user = useCurrentUser();

  return (
    <>
      <Head title={title} />

      <div className="flex flex-col gap-4">
        <header className="flex items-center justify-between bg-neutral-800 p-8">
          <Link href={route('home')} className="text-xl font-bold">
            Yapperz
          </Link>

          <UserMenu user={user} />
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </>
  );
}
