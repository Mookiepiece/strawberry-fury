import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/esm/styles/prism/vs';
import './styles.scss';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

// reduce bundle size
// https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
SyntaxHighlighter.registerLanguage('tsx', tsx);

const DemoPlayer: React.FC<{
  src: {
    demo: any;
    raw: string;
  };
}> = ({ src: { demo, raw } }) => {
  const LiveDemo = demo;
  return (
    <div className="demo-player">
      <div className="demo-live">
        <LiveDemo />
      </div>
      <div className="demo-code">
        <SyntaxHighlighter language="tsx" style={vs}>
          {raw}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DemoPlayer;
