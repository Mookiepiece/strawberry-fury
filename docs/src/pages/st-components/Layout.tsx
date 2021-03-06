// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/st-assets/Layout/*.tsx');

import grid from '@docs/st-assets/Layout/grid.tsx?raw';
import spacing from '@docs/st-assets/Layout/spacing.tsx?raw';

const requireRaw = {
  grid,
  spacing,
};

import zh from '@docs/st-assets/Layout/index-zh.md?raw';
import en from '@docs/st-assets/Layout/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
