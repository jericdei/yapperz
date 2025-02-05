import MessagesMenu from '@/components/navigation/messages-menu';
import NotificationMenu from '@/components/navigation/notification-menu';
import UserMenu from '@/components/navigation/user-menu';
import { Toaster } from '@/components/ui/toaster';
import { useCurrentUser } from '@/hooks/auth';
import { useToast } from '@/hooks/use-toast';
import { Head, Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';

interface AuthenticatedLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function AuthenticatedLayout({
  title,
  children,
}: AuthenticatedLayoutProps) {
  const user = useCurrentUser();
  const { toast } = useToast();
  const { props } = usePage();

  useEffect(() => {
    if (props.session.toast) {
      toast({
        title: props.session.toast.type === 'success' ? 'Success!' : 'Error!',
        description: props.session.toast.message,
        variant:
          props.session.toast.type === 'success' ? 'default' : 'destructive',
        duration: 1000,
      });

      props.session.toast = null;
    }
  }, [props.session.toast]);

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
