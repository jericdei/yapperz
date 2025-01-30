import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GuestLayout from "@/layouts/guest";
import { User } from "@/types/models";
import { useForm } from "@inertiajs/react";

export default function Login() {
  const { data, setData, post } = useForm<Pick<User, 'email'>>({
    email: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(route('auth.login'))
  }

  return (
    <GuestLayout title="Login">
      <div className="space-y-4">
        <h1>Login to your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input placeholder="Email" value={data.email} name="email" type="email" onChange={e => setData('email', e.target.value)} />
            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  )
}
