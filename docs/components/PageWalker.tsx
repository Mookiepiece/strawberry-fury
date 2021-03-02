import React from 'react';
import ReactMarkdown from 'react-markdown';
import DemoPlayer from './DemoPlayer';
import gfm from 'remark-gfm';

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

//https://zhuanlan.zhihu.com/p/59564277 webpack中require.context的作用
const Page: React.FC<{ requireDemo: any; requireRaw: any }> = ({ requireDemo, requireRaw }) => {
  const map = getMarkdownAndDemo(requireDemo, requireRaw);
  const mark = requireRaw('./index.md').default;
  const splitedMarks: string[] = mark.split(/DEMO\{\{(.*?)\}\}/);

  return (
    <div className="page-walker">
      {splitedMarks.map((name, index) => {
        if (index % 2) {
          return <DemoPlayer key={index} src={map[name]} />;
        } else {
          return (
            <ReactMarkdown plugins={[gfm]} key={index} className="page-walker-markdown">
              {name}
            </ReactMarkdown>
          );
        }
      })}
    </div>
  );
};

export default Page;
