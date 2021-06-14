import clsx from 'clsx';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Link as _ } from 'starfall';

type NavLinkProps = {
  to: string;
  className?: string;
};
const NavLink: React.FC<NavLinkProps> = ({ to, className, children }) => {
  const match = useRouteMatch({
    path: to,
  });

  return (
    <Link
      to={to}
      className={clsx(className, 'st-link', 'st-link--button', match && 'st-link--active')}
    >
      {children}
    </Link>
  );
};

export default NavLink;
