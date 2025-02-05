import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MessageCircle } from 'lucide-react';

export default function MessagesMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2">
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">Messages</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end">
        <pre>Your messages</pre>
      </PopoverContent>
    </Popover>
  );
}
