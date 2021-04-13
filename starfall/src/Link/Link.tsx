import clsx from 'clsx';
import React from 'react';

type LinkProps = {
  type?: 'button';
  href?: string;
  active?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = props => {
  const { children, type, href, className, active, ...rest } = props;

  return (
    <a
      className={clsx(
        className,
        'st-link',
        type === 'button' ? 'st-link--button' : 'st-link--default',
        active && 'st-link--active'
      )}
      tabIndex={0}
      href={href}
      {...rest}
    >
      <span>{children}</span>
    </a>
  );
};

export default Link;
