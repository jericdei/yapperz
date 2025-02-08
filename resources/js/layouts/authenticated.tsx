import { Toaster } from '@/components/ui/toaster';
import { useReceiveNotification } from '@/hooks/notification';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '@/layouts/main';
import Header from '@/layouts/partials/header';
import LeftSidebar from '@/layouts/partials/left-sidebar';
import RightSidebar from '@/layouts/partials/right-sidebar';
import { Head, usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect } from 'react';

interface AuthenticatedLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function AuthenticatedLayout({
  title,
  children,
}: AuthenticatedLayoutProps) {
  const { toast } = useToast();
  const { props } = usePage();

  useReceiveNotification((notification) => {
    toast({
      description: notification.message,
    });
  });

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
    <MainLayout>
      <Toaster />
      <Head title={title} />

      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
          <RightSidebar />
        </div>
      </div>
    </MainLayout>
  );
}
