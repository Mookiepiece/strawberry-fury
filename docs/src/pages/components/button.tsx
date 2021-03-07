import React from 'react';
import PageWalker from '🦌/components/PageWalker';

const requireDemo = require.context('../../assets/button', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../assets/button', false, /\.(md|tsx)$/);

export default function Home() {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} />;
}
