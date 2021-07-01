import React from 'react';
import { FormMitt } from './Form';
import { ValidateStatusParam } from './FormItem';
export declare type FormItemsRegisterProps = {
    name: string;
    pathes: string[];
    validate: () => Promise<void>;
    cancelValidate: () => void;
    reset: (value: any) => void;
    setValidateStatus: (s: ValidateStatusParam) => void;
};
export declare const FormContext: React.Context<{
    register: (i: FormItemsRegisterProps) => void;
    unregister: (i: FormItemsRegisterProps) => void;
    formMitt: FormMitt;
}>;
