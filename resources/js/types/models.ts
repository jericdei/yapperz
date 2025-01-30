export interface User {
  // columns
  id: string
  first_name: string
  middle_name: string | null
  last_name: string
  email: string
  email_verified_at: string | null
  remember_token?: string | null
  deleted_at: string | null
  created_at: string | null
  updated_at: string | null
}
