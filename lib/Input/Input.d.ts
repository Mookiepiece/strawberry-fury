import React from 'react';
declare type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>;
declare const Input: React.FC<InputProps>;
export default Input;
