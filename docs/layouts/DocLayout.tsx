import PageWalker from 'docs/components/PageWalker';
import Nav from 'docs/components/SideBar';
import React from 'react';

const ComponentPageLayout: React.FC<{ requireDemo: any; requireRaw: any }> = ({
  requireDemo,
  requireRaw,
}) => {
  return (
    <div>
      <Nav />
      <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} />
    </div>
  );
};

export default ComponentPageLayout;
