import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  height?: string | number;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ type = 'button', children, ...rest }) => {
  return (
    <button type={type} className="st-button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
