import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  height?: string | number;
  primary?: boolean;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ type = 'button', primary, children, ...rest }) => {
  return (
    <button
      type={type}
      className={clsx('st-button', primary ? 'st-button--primary' : 'st-button--default')}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
