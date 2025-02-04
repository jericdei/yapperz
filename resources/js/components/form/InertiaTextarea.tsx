import { FormDataConvertible } from '@inertiajs/core';
import { InertiaFormProps } from '@inertiajs/react';
import { InputHTMLAttributes } from 'react';
import { Textarea } from '../ui/textarea';

type FormDataType = Record<string, FormDataConvertible>;

interface InertiaTextareaProps<T extends FormDataType>
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
  setData: InertiaFormProps<T>['setData'];
  error?: any;
}

export default function InertiaTextarea<T extends FormDataType>({
  placeholder,
  setData,
  error,
  ...props
}: InertiaTextareaProps<T>) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Textarea
        {...props}
        placeholder={placeholder}
        onChange={(e) => setData(props.name, e.target.value as T[string])}
      />

      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}
