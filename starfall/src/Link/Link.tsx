import clsx from 'clsx';
import React from 'react';

type LinkProps = {
  type?: 'button';
  href?: string;
} & React.HtmlHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = props => {
  const { children, type, href, className, ...rest } = props;

  return (
    <a
      className={clsx(
        'st-link',
        type === 'button' ? 'st-link--button' : 'st-link--default',
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
