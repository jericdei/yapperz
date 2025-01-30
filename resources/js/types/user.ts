import { User } from '@/types/models';

export type RegisterUser = Omit<
  User,
  | 'id'
  | 'created_at'
  | 'updated_at'
  | 'email_verified_at'
  | 'remember_token'
  | 'deleted_at'
>;

export type LoginUser = Pick<User, 'email'>;

export interface ValidateUser extends Record<string, string> {
  email: string;
  code: string;
}
