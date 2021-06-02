// auto
import React from 'react';
import PageWalker from '@docs/components/PageWalker';

const requireDemo = import.meta.globEager('/src/sf-assets/Dialog/*.tsx');

import hutao from '@docs/sf-assets/Dialog/hutao.tsx?raw';
import index from '@docs/sf-assets/Dialog/index.tsx?raw';
import tank from '@docs/sf-assets/Dialog/tank.tsx?raw';
import warning from '@docs/sf-assets/Dialog/warning.tsx?raw';

const requireRaw = {
  hutao,
  index,
  tank,
  warning,
};

import zh from '@docs/sf-assets/Dialog/index-zh.md?raw';
import en from '@docs/sf-assets/Dialog/index-en.md?raw';
const requireMd = {
  zh,
  en,
};

const Page: React.FC = () => {
  return <PageWalker requireDemo={requireDemo} requireRaw={requireRaw} requireMd={requireMd} />;
};
export default Page;
