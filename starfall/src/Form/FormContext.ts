import React from 'react';
import { ValidateStatusParam } from './FormItem';

export type FormItemsRegisterProps = {
  name: string;
  validate: () => Promise<void>;
  cancelValidate: () => void;
  clearValidate: () => void;
  setValidateStatus: (s: ValidateStatusParam) => void;
};

export const FormContext = React.createContext<{
  value: Record<string, unknown>;
  setValue: (pathes: string[], propValue: unknown) => void;
  register: (i: FormItemsRegisterProps) => void;
  unregister: (i: FormItemsRegisterProps) => void;
  submitting: boolean;
}>({
  value: {},
  setValue: () => {},
  register: () => {},
  unregister() {},
  submitting: false,
});
