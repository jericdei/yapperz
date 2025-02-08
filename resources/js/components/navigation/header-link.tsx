import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

export default function HeaderNavLink({
  routeName,
  children,
}: {
  routeName: string;
  children: string;
}) {
  const { url } = usePage();

  return (
    <Link
      className={cn(
        'text-foreground/60 transition-colors hover:text-foreground/80',
        new URL(route(routeName)).pathname === url &&
          'font-bold text-foreground',
      )}
      href={route(routeName)}
    >
      {children}
    </Link>
  );
}
