import React, { useState } from 'react';
import { Button } from 'starfall';

const BasicUsage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div style={{ display: 'grid', gap: 10 }}>
        <div>
          <Button
            primary
            solid
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            加载中
          </Button>
          &nbsp; &nbsp;
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
          &nbsp; &nbsp;
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            加载中
          </Button>
          &nbsp; &nbsp;
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
        </div>
        <div>
          <Button primary solid disabled>
            禁用
          </Button>
          &nbsp; &nbsp;
          <Button primary disabled>
            禁用
          </Button>
          &nbsp; &nbsp;
          <Button disabled>禁用</Button>
          &nbsp; &nbsp;
          <Button textual disabled>
            禁用
          </Button>
        </div>
        <br />
        <br />
        <div style={{ maxWidth: 280 }}>
          <Button
            primary
            solid
            block
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            块状按钮
          </Button>
          <br />
          <Button
            primary
            block
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            块状按钮
          </Button>
          <br />
          <Button
            block
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            块状按钮
          </Button>
          <br />
          <Button
            textual
            block
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          >
            块状按钮
          </Button>
        </div>
        <div style={{ maxWidth: 280 }}>
          <Button primary solid block disabled>
            块状按钮
          </Button>
          <br />
          <Button primary block disabled>
            块状按钮
          </Button>
          <br />
          <Button block disabled>
            块状按钮
          </Button>
          <br />
          <Button textual block disabled>
            块状按钮
          </Button>
        </div>
      </div>
    </>
  );
};
export default BasicUsage;
