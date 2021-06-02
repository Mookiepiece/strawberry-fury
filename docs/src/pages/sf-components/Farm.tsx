// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/sf-assets/Farm/*.tsx');

import basic from '@docs/sf-assets/Farm/basic.tsx?raw';

const requireRaw = {
  basic,
};

import zh from '@docs/sf-assets/Farm/index-zh.md?raw';
import en from '@docs/sf-assets/Farm/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
