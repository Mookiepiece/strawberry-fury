import React from 'react';
import { FormMitt } from './Form';
import { ValidateStatusParam } from './FormItem';

export type FormItemsRegisterProps = {
  name: string;
  pathes: string[];
  validate: () => Promise<void>;
  cancelValidate: () => void;
  reset: (value: any) => void;
  setValidateStatus: (s: ValidateStatusParam) => void;
};

export const FormContext = React.createContext<{
  register: (i: FormItemsRegisterProps) => void;
  unregister: (i: FormItemsRegisterProps) => void;
  formMitt: FormMitt;
}>({
  register() {},
  unregister() {},
  formMitt: { on() {}, off() {}, emit() {} },
});
