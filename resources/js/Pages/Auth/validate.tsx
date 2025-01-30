import InertiaInput from '@/components/form/InertiaInput';
import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest';
import { User } from '@/types/models';
import { ValidateUser } from '@/types/user';
import { useForm } from '@inertiajs/react';

interface ValidatePageProps {
  user: User;
}

export default function ValidatePage({ user }: ValidatePageProps) {
  const { data, setData, post, errors } = useForm<ValidateUser>({
    email: user.email,
    code: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('auth.code.validate.store'));
  };

  return (
    <GuestLayout title="Register">
      <div className="space-y-4">
        <h1>Verify your email</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <InertiaInput<ValidateUser>
              type="text"
              name="code"
              placeholder="Enter Verification Code"
              value={data.code}
              setData={setData}
              error={errors.code}
            />

            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
