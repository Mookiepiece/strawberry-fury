import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import DemoPlayer from '../DemoPlayer';
import gfm from 'remark-gfm';
import { i18nStateContext } from '🦌/utils/i18n';
import './styles.scss';

//https://zhuanlan.zhihu.com/p/59564277 webpack中require.context的作用
function getMarkdownAndDemo(requireDemo: any, requireRaw: any) {
  const map: Record<string, { demo: any; raw: string }> = requireDemo.keys().reduce(
    (map: any, key: any) => ({
      ...map,
      [key]: { demo: requireDemo(key).default, raw: requireRaw(key).default },
    }),
    {}
  );

  return map;
}

const PageWalker: React.FC<{ requireDemo: any; requireRaw: any }> = ({
  requireDemo,
  requireRaw,
}) => {
  const i18nState = useContext(i18nStateContext);
  const demosMap = getMarkdownAndDemo(requireDemo, requireRaw);
  const mark = requireRaw(`./index-${i18nState}.md`).default;
  const splitedDemoMarks: string[] = mark.split(/DEMO\{\{(.*?)\}\}/);

  return (
    <article className="page-walker">
      {splitedDemoMarks.map((name, index) => {
        if (index % 2) {
          return <DemoPlayer key={index} src={demosMap[name]} />;
        } else {
          return (
            <ReactMarkdown plugins={[gfm]} key={index} className="page-walker-markdown">
              {name}
            </ReactMarkdown>
          );
        }
      })}
    </article>
  );
};

export default PageWalker;
