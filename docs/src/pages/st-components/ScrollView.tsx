// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/st-assets/ScrollView/*.tsx');

import basic from '@docs/st-assets/ScrollView/basic.tsx?raw';

const requireRaw = {
  basic,
};

import zh from '@docs/st-assets/ScrollView/index-zh.md?raw';
import en from '@docs/st-assets/ScrollView/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
