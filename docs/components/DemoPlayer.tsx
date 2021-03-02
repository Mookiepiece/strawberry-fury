import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
