import React, { useState } from 'react';
import { Button, Spin } from 'starfall';

const BasicUsage: React.FC = () => {
  const [l, setL] = useState(false);

  return (
    <>
      <span style={{ color: 'navy' }}>
        <Spin weight={1} />
        <Spin />
        <Spin weight={3} />
      </span>
      <span>
        <Spin loading={l} weight={1} lazy={1000} />
        <Spin loading={l} lazy={2000} />
        {/* 3000 will not appear 👇 */}
        <Spin loading={l} weight={3} lazy={3000} />
      </span>
      <div style={{ maxWidth: 300 }}>
        <Spin.Container loading={l}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis
            molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde
            eveniet, distinctio explicabo dignissimos!
          </p>
        </Spin.Container>
        <Spin.Container loading={l} lazy={1000}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet ipsa numquam omnis
            molestias dolore enim officia sed quibusdam vitae itaque magni vel alias eos unde
            eveniet, distinctio explicabo dignissimos!
          </p>
        </Spin.Container>
      </div>
      <Button
        loading={l}
        onClick={() => {
          setL(true);
          setTimeout(() => setL(false), 3000);
        }}
      >
        Loading
      </Button>
    </>
  );
};
export default BasicUsage;
