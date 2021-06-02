import React from 'react';
import { Button } from '🦄';

const CustomStyle: React.FC = () => {
  return (
    <>
      <Button width={100} height={50}>
        Button
      </Button>
      <div style={{ display: 'inline-block', width: 20 }}></div>
      <Button width={50} height={50}>
        ⚆_⚆
      </Button>
    </>
  );
};

export default CustomStyle;
