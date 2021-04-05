import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  height?: string | number;
  primary?: boolean;
  textual?: boolean;
  block?: boolean;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  primary,
  textual,
  block,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'st-button',
        primary ? 'st-button--primary' : textual ? 'st-button--textual' : 'st-button--default',
        block && 'st-button--block'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
