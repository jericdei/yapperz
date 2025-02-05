import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function RightSidebar() {
  const contacts = [
    { name: 'Alice Johnson', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'Bob Smith', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'Charlie Brown', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'David Lee', avatar: '/placeholder.svg?height=32&width=32' },
    { name: 'Emma Davis', avatar: '/placeholder.svg?height=32&width=32' },
  ];

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] space-y-4 overflow-y-auto border-l p-4 lg:flex lg:w-64 lg:flex-col">
      <h2 className="text-lg font-semibold">Contacts</h2>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center space-x-2 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{contact.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
