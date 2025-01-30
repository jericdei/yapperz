import { Input } from '@/components/ui/input';
import { FormDataConvertible } from '@inertiajs/core';
import { InertiaFormProps } from '@inertiajs/react';
import { InputHTMLAttributes } from 'react';

type FormDataType = Record<string, FormDataConvertible>;

interface InertiaInputProps<T extends FormDataType>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  setData: InertiaFormProps<T>['setData'];
  error?: any;
}

export default function InertiaInput<T extends FormDataType>({
  placeholder,
  setData,
  error,
  ...props
}: InertiaInputProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <Input
        {...props}
        placeholder={placeholder}
        onChange={(e) => setData(props.name, e.target.value as T[string])}
      />

      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}
