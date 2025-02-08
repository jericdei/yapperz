import { DatabaseNotifications } from '@/types/notification'
export interface Post {
  // columns
  id: string
  user_id: string | null
  content: string
  like_count: number
  deleted_at: string | null
  created_at: string | null
  updated_at: string | null
  // relations
  user?: User
}

export interface User {
  // columns
  id: string
  first_name: string
  middle_name: string | null
  last_name: string
  username: string
  email: string
  email_verified_at: string | null
  is_private: boolean
  remember_token?: string | null
  deleted_at: string | null
  created_at: string | null
  updated_at: string | null
  // mutators
  full_name: string
  is_friend_request_sent: boolean
  // overrides
  notifications: DatabaseNotifications
  // relations
  posts?: Post[]
  friends?: User[]
  accepted_friends?: User[]
  friend_requests?: User[]
}
