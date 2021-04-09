import React from 'react';
import { Button } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <Button primary>主要按钮</Button>
      <Button>次级按钮</Button>
      <Button textual>文字按钮</Button>
      <br />
      <br />
      <br />
      <Button block>块状按钮</Button>
    </>
  );
};
export default BasicUsage;
