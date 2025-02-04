import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { BellIcon } from 'lucide-react';

export default function NotificationMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="aspect-square w-full cursor-pointer rounded-full bg-neutral-600 p-2 hover:bg-neutral-700"
          asChild
        >
          <BellIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end">
        <pre>Your notifications</pre>
      </PopoverContent>
    </Popover>
  );
}
