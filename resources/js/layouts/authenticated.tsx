import MessagesMenu from '@/components/navigation/messages-menu';
import NotificationMenu from '@/components/navigation/notification-menu';
import UserMenu from '@/components/navigation/user-menu';
import { Toaster } from '@/components/ui/toaster';
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
      <Toaster />
      <Head title={title} />

      <div className="flex flex-col gap-4">
        <header className="flex items-center justify-between bg-neutral-800 px-8 py-4">
          <Link href={route('home')} className="text-xl font-bold">
            Yapperz
          </Link>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <MessagesMenu />
              <NotificationMenu />
            </div>

            <UserMenu user={user} />
          </div>
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </>
  );
}
