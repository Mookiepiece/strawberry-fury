import React from 'react';
import DocLayout from 'docs/layouts/DocLayout';

const requireDemo = require.context('../../src/button', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../src/button', false, /\.(md|tsx)$/);

export default function Home() {
  return <DocLayout requireDemo={requireDemo} requireRaw={requireRaw} />;
}
