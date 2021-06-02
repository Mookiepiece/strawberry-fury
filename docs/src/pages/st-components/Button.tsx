// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/st-assets/Button/*.tsx');

import basic from '@docs/st-assets/Button/basic.tsx?raw';
import disabled from '@docs/st-assets/Button/disabled.tsx?raw';

const requireRaw = {
  basic,
  disabled,
};

import zh from '@docs/st-assets/Button/index-zh.md?raw';
import en from '@docs/st-assets/Button/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
