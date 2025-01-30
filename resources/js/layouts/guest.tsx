import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

interface GuestLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function GuestLayout({ children, title }: GuestLayoutProps) {
  return (
    <>
      <Head title={title} />

      <section className="flex flex-col items-center justify-center h-screen">
        {children}
      </section>
    </>
  );
}
