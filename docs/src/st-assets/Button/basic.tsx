import React from 'react';
import { Button } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <Button primary solid>
        主要实心按钮
      </Button>
      &nbsp; &nbsp;
      <Button primary>主要按钮</Button>
      &nbsp; &nbsp;
      <Button>次级按钮</Button>
      &nbsp; &nbsp;
      <Button textual>文字按钮</Button>
      <br />
      <br />
      <div style={{ maxWidth: 280 }}>
        <Button primary solid block>
          块状按钮
        </Button>
        <br />
        <Button primary block>
          块状按钮
        </Button>
        <br />
        <Button block>块状按钮</Button>
        <br />
        <Button textual block>
          块状按钮
        </Button>
      </div>
    </>
  );
};
export default BasicUsage;
