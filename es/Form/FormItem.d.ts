import React from 'react';
import { RuleItem } from 'async-validator';
export declare type ValidateStatus = {
    state: 'error' | '';
    message: string;
};
export declare type ValidateStatusParam = '' | {
    state: 'error';
    message: string;
};
export declare type FormItemFnChildren<T> = (props: {
    value: T;
    onChange: (value: T) => void;
    withLabel: (children: React.ReactNode) => React.ReactNode;
    validate: (method: 'change' | 'force') => Promise<void>;
    validateStatus: ValidateStatus;
    setValidateStatus: (s: ValidateStatusParam) => void;
    cancelValidate: () => void;
}) => React.ReactNode;
export declare type FormItemProps<T> = {
    name: string;
    label?: string;
    rules?: RuleItem | RuleItem[];
    children: React.ReactElement | FormItemFnChildren<T>;
};
declare const FormItem: <T extends unknown = any>({ rules, label, name, children, }: FormItemProps<T>) => React.ReactElement;
export { FormItem };
