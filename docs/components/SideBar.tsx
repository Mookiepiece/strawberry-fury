import React from 'react';
import pages from 'docs/pages';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <div>
      <h3>Components</h3>
      {Object.entries(pages).map(([k, v]) => (
        <Link href={k}>{v}</Link>
      ))}
    </div>
  );
};

export default Nav;
