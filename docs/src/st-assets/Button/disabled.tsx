import React, { useState } from 'react';
import { Button } from 'starfall';

const BasicUsage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button
        primary
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
        }}
      >
        加载中
      </Button>
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
        }}
      >
        加载中
      </Button>
      <Button
        textual
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1000);
        }}
      >
        加载中
      </Button>
      <Button primary disabled>
        禁用
      </Button>
      <Button disabled>禁用</Button>
      <Button textual disabled>
        禁用
      </Button>
    </>
  );
};
export default BasicUsage;
