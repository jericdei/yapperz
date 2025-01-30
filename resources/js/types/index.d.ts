import { Config } from 'ziggy-js';

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: {}; // TODO: Add user type
  };
  ziggy: Config & { location: string };
};
