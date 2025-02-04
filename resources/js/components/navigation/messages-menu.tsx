import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MessagesSquareIcon } from 'lucide-react';

export default function MessagesMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="aspect-square w-full cursor-pointer rounded-full bg-neutral-600 p-2 hover:bg-neutral-700"
          asChild
        >
          <MessagesSquareIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end">
        <pre>Your messages</pre>
      </PopoverContent>
    </Popover>
  );
}
