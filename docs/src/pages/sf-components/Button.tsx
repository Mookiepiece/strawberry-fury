// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/sf-assets/Button/*.tsx');

import basic from '@docs/sf-assets/Button/basic.tsx?raw';
import customWidth from '@docs/sf-assets/Button/customWidth.tsx?raw';
import haircut from '@docs/sf-assets/Button/haircut.tsx?raw';

const requireRaw = {
  basic,
  customWidth,
  haircut,
};

import zh from '@docs/sf-assets/Button/index-zh.md?raw';
import en from '@docs/sf-assets/Button/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
