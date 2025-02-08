import MainLayout from '@/layouts/main';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface GuestLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function GuestLayout({ children, title }: GuestLayoutProps) {
  return (
    <MainLayout>
      <Head title={title} />

      <section className="flex h-screen flex-col items-center justify-center">
        <div className="w-1/2 p-16 md:w-1/3">{children}</div>
      </section>
    </MainLayout>
  );
}
