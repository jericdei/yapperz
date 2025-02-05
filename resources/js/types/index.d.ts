import { Config } from 'ziggy-js';
import { User } from './models';

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
  session: {
    toast: {
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
    } | null;
  };
};
