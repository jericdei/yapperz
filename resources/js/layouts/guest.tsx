import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface GuestLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function GuestLayout({ children, title }: GuestLayoutProps) {
  return (
    <>
      <Head title={title} />

      <section className="flex h-screen flex-col items-center justify-center">
        <div className="w-1/4 p-16">{children}</div>
      </section>
    </>
  );
}
