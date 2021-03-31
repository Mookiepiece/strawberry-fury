import React from 'react';
import PageWalker from '🦌/components/PageWalker';

const requireDemo = require.context('../../sf-assets/Button', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../sf-assets/Button', false, /\.(md|tsx)$/);

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} />;
};
export default Page;
