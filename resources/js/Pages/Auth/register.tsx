import InertiaInput from '@/components/form/InertiaInput';
import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest';
import { RegisterUser } from '@/types/user';
import { Link, useForm } from '@inertiajs/react';

export default function RegisterPage() {
  const { data, setData, post, errors } = useForm<RegisterUser>({
    email: '',
    first_name: '',
    middle_name: '',
    last_name: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('auth.register'));
  };

  return (
    <GuestLayout title="Register">
      <div className="space-y-4">
        <h1>Create your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <InertiaInput<RegisterUser>
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              setData={setData}
              error={errors.email}
            />

            <InertiaInput<RegisterUser>
              type="text"
              name="first_name"
              placeholder="First Name"
              value={data.first_name}
              setData={setData}
              error={errors.first_name}
            />

            <InertiaInput<RegisterUser>
              type="text"
              name="middle_name"
              placeholder="Middle Name (Optional)"
              value={data.middle_name ?? ''}
              setData={setData}
              error={errors.middle_name}
            />

            <InertiaInput<RegisterUser>
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={data.last_name}
              setData={setData}
              error={errors.last_name}
            />

            <Button>Continue</Button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <p>Already have an account?</p>
          <Link className="underline" href={route('auth.login')}>
            {' Login'}
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
