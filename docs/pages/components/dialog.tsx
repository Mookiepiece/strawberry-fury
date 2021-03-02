import React from 'react';
import DocLayout from 'docs/layouts/DocLayout';

const requireDemo = require.context('../../src/dialog', false, /\.tsx$/);
const requireRaw = require.context('!raw-loader!../../src/dialog', false, /\.(md|tsx)$/);

export default function Home() {
  return <DocLayout requireDemo={requireDemo} requireRaw={requireRaw} />;
}
