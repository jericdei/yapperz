import { ModeToggle } from '@/components/mode-toggle';
import MessagesMenu from '@/components/navigation/messages-menu';
import NotificationMenu from '@/components/navigation/notification-menu';
import UserMenu from '@/components/navigation/user-menu';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/auth';
import { Link } from '@inertiajs/react';

export default function Header() {
  const user = useCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            className="mr-6 flex items-center space-x-2"
            href={route('home')}
          >
            <span className="hidden font-bold sm:inline-block">Yapperz</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              href="/friends"
            >
              Friends
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input
              className="h-9 md:w-[300px] lg:w-[400px]"
              placeholder="Search..."
              type="search"
            />
          </div>

          <nav className="flex items-center">
            <MessagesMenu />
            <NotificationMenu />
            <ModeToggle />
          </nav>
        </div>

        <div className="ml-8">
          <UserMenu user={user} />
        </div>
      </div>
    </header>
  );
}
