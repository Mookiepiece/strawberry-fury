import React from 'react';
import PageWalker from '🦌/components/PageWalker';

const requireDemo = require.context('../../assets/collapse', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../assets/collapse', false, /\.(md|tsx)$/);

export default function Home() {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} />;
}
