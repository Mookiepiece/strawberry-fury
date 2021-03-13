import React from 'react';
export type Language = 'zh' | 'en';

type KEYS = 'IndexPageDesc' | 'IndexPageGetStarted' | 'NavbarHome' | 'NavbarComponents';

const a: Record<
  KEYS,
  {
    en: string;
    zh: string;
  }
> = {
  IndexPageDesc: {
    en: 'vanilla react.js components.',
    zh: '自然的react.js组件库',
  },
  IndexPageGetStarted: {
    en: 'GET STARTED',
    zh: '开始使用',
  },
  NavbarHome: {
    en: 'Home',
    zh: '家',
  },
  NavbarComponents: {
    en: 'Components',
    zh: '组件',
  },
};

export const mmm = new Map();

export const getCowboy: (lang: Language) => Record<KEYS, string> = lang => {
  if (mmm.has(lang)) {
    return mmm.get(lang) as Record<KEYS, string>;
  }
  const r: Record<KEYS, string> = Object.keys(a).reduce(
    (r, k) => ({ ...r, [k]: a[k as KEYS][lang] }),
    {}
  ) as Record<KEYS, string>;
  mmm.set(lang, r);
  return r;
};

export const i18nContext = React.createContext<Record<KEYS, string>>(getCowboy('zh'));
export const i18nStateContext = React.createContext<Language>('zh');
