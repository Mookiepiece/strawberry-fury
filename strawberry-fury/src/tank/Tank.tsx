/* eslint-disable no-irregular-whitespace */
import React from 'react';

const Tank: React.FC = () => {
  return (
    <pre>
      {`
▄▄▄▄▄▄███〓█
　　▂▃▄▅████▅▄▄▄▄●
　　██████████████
　　◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲◤
  `.trim()}
    </pre>
  );
};

export default Tank;
