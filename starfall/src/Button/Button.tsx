import clsx from 'clsx';
import React from 'react';
import Spin from 'starfall/Spin';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  height?: string | number;
  primary?: boolean;
  textual?: boolean;
  block?: boolean;
  loading?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const noop = () => {};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  primary,
  textual,
  block,
  children,
  className,
  loading = false,
  onClick = noop,

  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        'st-button',
        primary ? 'st-button--primary' : textual ? 'st-button--textual' : 'st-button--default',
        block && 'st-button--block',
        loading && 'st-button--loading'
      )}
      {...rest}
      onClick={e => {
        !loading && onClick(e);
      }}
    >
      <Spin border={1} visible={loading} />
      <span className="st-button__content">{children}</span>
    </button>
  );
};

export default Button;
