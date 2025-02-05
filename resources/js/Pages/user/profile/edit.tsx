import InertiaInput from '@/components/form/InertiaInput';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/auth';
import AuthenticatedLayout from '@/layouts/authenticated';
import { EditUserProfile } from '@/types/user';
import { useForm } from '@inertiajs/react';

export default function ProfileEditPage() {
  const user = useCurrentUser();

  const { patch, data, setData, errors, isDirty, processing, setDefaults } =
    useForm<EditUserProfile>({
      email: user.email,
      first_name: user.first_name,
      middle_name: user.middle_name,
      last_name: user.last_name,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patch(route('users.profile.update'), {
      onSuccess: () => setDefaults(),
    });
  };

  return (
    <AuthenticatedLayout title="Edit Profile">
      <h1>Edit your profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-8 flex w-1/4 flex-col gap-4">
          <InertiaInput<EditUserProfile>
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            setData={setData}
            error={errors.email}
          />

          <InertiaInput<EditUserProfile>
            type="text"
            name="first_name"
            placeholder="First Name"
            value={data.first_name}
            setData={setData}
            error={errors.first_name}
          />

          <InertiaInput<EditUserProfile>
            type="text"
            name="middle_name"
            placeholder="Middle Name (Optional)"
            value={data.middle_name ?? ''}
            setData={setData}
            error={errors.middle_name}
          />

          <InertiaInput<EditUserProfile>
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={data.last_name}
            setData={setData}
            error={errors.last_name}
          />

          <Button disabled={!isDirty || processing}>Update</Button>
        </div>
      </form>
    </AuthenticatedLayout>
  );
}
