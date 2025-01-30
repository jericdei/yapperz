import { User } from '@/types/models';

export type RegisterUser = Pick<
  User,
  'first_name' | 'middle_name' | 'last_name' | 'email'
>;

export type LoginUser = Pick<User, 'email'>;

export interface ValidateUser extends Record<string, string> {
  email: string;
  code: string;
}
