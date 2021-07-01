import React from 'react';
declare type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    height?: string | number;
    primary?: boolean;
    textual?: boolean;
    block?: boolean;
    solid?: boolean;
    loading?: boolean;
} & React.HTMLProps<HTMLButtonElement>;
declare const Button: React.FC<ButtonProps>;
export default Button;
