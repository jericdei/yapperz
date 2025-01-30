import InertiaInput from '@/components/form/InertiaInput';
import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest';
import { LoginUser } from '@/types/user';
import { Link, useForm } from '@inertiajs/react';

export default function LoginPage() {
  const { data, setData, post, errors } = useForm<LoginUser>({
    email: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('auth.code.generate'));
  };

  return (
    <GuestLayout title="Login">
      <div className="space-y-4">
        <h1>Login to your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <InertiaInput<LoginUser>
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              setData={setData}
              error={errors.email}
            />
            <Button>Continue</Button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <p>Don't have an account?</p>
          <Link className="underline" href={route('auth.register')}>
            {' '}
            Sign up
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
