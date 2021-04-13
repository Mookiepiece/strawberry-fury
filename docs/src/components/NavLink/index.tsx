import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Link as _ } from 'starfall';

const FancyLink: React.FC<{
  children: [boolean, string, React.ReactNode];
  navigate: unknown;
}> = ({ navigate, ...props }) => (
  <_ type="button" active={props.children[0]} {...props} className={props.children[1]}>
    {props.children[2]}
  </_>
);

type NavLinkProps = {
  to: string;
  className?: string;
};
const NavLink: React.FC<NavLinkProps> = ({ to, className, children }) => {
  const match = useRouteMatch({
    path: to,
  });

  return (
    <Link to={to} className={className} component={FancyLink}>
      {[match, className, children]}
    </Link>
  );
};

export default NavLink;
