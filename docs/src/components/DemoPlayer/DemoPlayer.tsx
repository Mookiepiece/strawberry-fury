import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import clsx from 'clsx';
import { Collapse } from 'starfall';
import './styles.scss';

// reduce bundle size
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
SyntaxHighlighter.registerLanguage('tsx', tsx);

const DemoPlayer: React.FC<{
  src: {
    demo: any;
    raw: string;
  };
}> = ({ src: { demo, raw } }) => {
  const LiveDemo = demo.default;
  const [active, setActive] = useState(false);
  return (
    <div className="demo-player">
      <div className="demo-player-inner">
        <div className="demo-live">
          <LiveDemo />
        </div>
        <button
          className={clsx('demo-control', active && 'active')}
          onClick={() => setActive(!active)}
        >
          {'<>'}
        </button>
        <div className="demo-code">
          <Collapse.Panel active={active}>
            <SyntaxHighlighter language="tsx" style={vs}>
              {raw}
            </SyntaxHighlighter>
          </Collapse.Panel>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;
