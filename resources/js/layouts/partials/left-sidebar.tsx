import { Link } from '@inertiajs/react';
import { Bookmark, Calendar, Settings, User, Users } from 'lucide-react';

export default function LeftSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] space-y-4 overflow-y-auto border-r p-4 md:flex md:w-64 md:flex-col">
      <SidebarLinkItem href="/profile">
        <User className="h-5 w-5" />
        <span>Profile</span>
      </SidebarLinkItem>

      <SidebarLinkItem href="/friends">
        <Users className="h-5 w-5" />
        <span>Friends</span>
      </SidebarLinkItem>

      <SidebarLinkItem href="/saved">
        <Bookmark className="h-5 w-5" />
        <span>Saved</span>
      </SidebarLinkItem>

      <SidebarLinkItem href="/events">
        <Calendar className="h-5 w-5" />
        <span>Events</span>
      </SidebarLinkItem>

      <SidebarLinkItem href="/settings">
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </SidebarLinkItem>
    </aside>
  );
}

function SidebarLinkItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </Link>
  );
}
