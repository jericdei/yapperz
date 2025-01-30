import { router, usePage } from '@inertiajs/react';

export function useCurrentUser() {
  const page = usePage();

  return page.props.auth.user;
}

export function logoutUser() {
  router.post(route('auth.logout'));
}
