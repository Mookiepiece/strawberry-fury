import { ErrorList } from 'async-validator';
import React from 'react';
import type { Emitter } from 'starfall/_utils/mitt';
import Button from 'starfall/Button';
import { FormItem, ValidateStatusParam } from './FormItem';
declare type FormInstance<T extends Record<string, unknown>> = {
    setInitialValue: (initialValue: T) => void;
    validate: (names?: string[]) => Promise<T>;
    reset: (names?: string[]) => void;
    set: (callback: (value: T) => T) => void;
    value: T;
    setValidateStatus: (name: string, validateStatus: ValidateStatusParam) => void;
};
export declare type FormMitt = Emitter<{
    CHANGE: {
        pathes: string[];
        value: any;
    };
    UPDATE: {
        value: unknown;
        pathes: string[];
    };
    SUBMITTING_CHANGE: boolean;
}>;
declare type FormProps<T extends Record<string, unknown>> = {
    initialValue: T;
    children?: React.ReactNode;
    /** provide api and indicates the Form do internal submit, pick one from `action` and `onSubmit` */
    action?: ((value: T) => Promise<void> | void) | [(value: T) => Promise<void> | void, (errors: ErrorList) => Promise<void> | void];
    /** should validate manually if using form in this way, pick one from `action` and `onSubmit` */
    onSubmit?: () => void;
};
declare const Form: (<T extends Record<string, unknown>>(props: FormProps<T> & React.RefAttributes<unknown>) => React.ReactElement) & {
    Item: typeof FormItem;
    SubmitButton: typeof Button;
    useRef: <T extends Record<string, unknown>>() => React.RefObject<FormInstance<T>>;
};
export default Form;
