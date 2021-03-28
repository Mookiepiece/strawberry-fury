import React from 'react';
import PageWalker from '🦌/components/PageWalker';

const requireDemo = require.context('../../assets/StCollapse', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../assets/StCollapse', false, /\.(md|tsx)$/);

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} />;
};
export default Page;
