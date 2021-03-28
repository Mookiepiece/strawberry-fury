import React from 'react';
import { ValidateStatusParam } from './FormItem';

export type FormItemsRegisterProps = {
  name: string;
  validate: () => void;
  cancelValidate: () => void;
  clearValidate: () => void;
  setValidateStatus: (s: ValidateStatusParam) => void;
};

export const FormContext = React.createContext<{
  value: Record<string, unknown>;
  setValue: (pathes: string[], propValue: unknown) => void;
  register: (i: FormItemsRegisterProps) => void;
  unregister: (i: FormItemsRegisterProps) => void;
  submit: () => void;
}>({
  value: {},
  setValue: () => {},
  register: () => {},
  unregister() {},
  submit: () => {},
});
