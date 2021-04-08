/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import DemoPlayer from '../DemoPlayer';
import gfm from 'remark-gfm';
import directive from 'remark-directive';
import { i18nStateContext } from '🦌/utils/i18n';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
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

const HashHeadingOfSection: React.FC<any> = ({ children }) => {
  const hash = '#' + children[0].props.value;
  const history = useHistory();
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (history.location.hash === hash) {
      ref.current?.scrollIntoView();
      ref.current?.focus();
    }
  }, [hash, history.location.hash]);

  return (
    <>
      <h3>
        <Link to={{ hash }} ref={ref}>
          {children}
        </Link>
      </h3>
    </>
  );
};

const MyReactMarkdown: React.FC<{ children: string }> = ({ children }) => {
  return (
    <ReactMarkdown
      plugins={[gfm, directive]}
      linkTarget="_blank"
      renderers={{
        heading: props => {
          const { level, children } = props;
          if (level === 3) {
            console.log(props, 123);
            return <HashHeadingOfSection {...props} />;
          } else {
            return React.createElement('h' + level, null, children);
          }
        },
        containerDirective: props => {
          const { name, children } = props;
          console.log(props);
          return <div className={clsx(`container-directive-${name}`)}>{children}</div>;
        },
        textDirective: props => {
          const { name, children } = props;
          return <span className={clsx(`text-directive-${name}`)}>{children}</span>;
        },
        leafDirective: () => {
          throw new Error();
        },
      }}
      className="page-walker-markdown"
    >
      {children}
    </ReactMarkdown>
  );
};

const PageWalker: React.FC<{ requireDemo: any; requireRaw: any }> = ({
  requireDemo,
  requireRaw,
}) => {
  const [i18nState] = useContext(i18nStateContext);
  const demosMap = getMarkdownAndDemo(requireDemo, requireRaw);
  const article = requireRaw(`./index-${i18nState}.md`).default;

  const [headSection, ...sections] = article.split(/.*(?=###)/) as string[];
  return (
    <div className="page-walker">
      {<MyReactMarkdown>{headSection}</MyReactMarkdown>}
      {sections.map((section, index) => {
        if (/\nDEMO\{\{(.*?)\}\}/.test(section)) {
          // section with a demo
          const [md, demoName] = section.split(/\nDEMO\{\{(.*?)\}\}/);

          return (
            <section key={index} className="page-walker-markdown-demo-section">
              <MyReactMarkdown>{md}</MyReactMarkdown>
              <DemoPlayer src={demosMap[demoName]} />
            </section>
          );
        } else {
          // section without demo
          return (
            <section key={index}>
              <MyReactMarkdown>{section}</MyReactMarkdown>
            </section>
          );
        }
      })}
    </div>
  );
};

export default PageWalker;
