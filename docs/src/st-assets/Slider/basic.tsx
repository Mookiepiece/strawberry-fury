import React from 'react';
import { Slider } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <div style={{ padding: 40 }}>
        <Slider />
      </div>
      <div style={{ padding: 40 }}>
        <Slider
          min={10}
          max={20}
          step={2}
          label={[
            {
              value: 14,
            },
          ]}
        />
      </div>
      <div style={{ padding: 40 }}>
        <Slider
          min={101}
          max={201}
          step={2}
          label={[
            {
              value: 114,
            },
          ]}
        />
      </div>{' '}
      <div style={{ padding: 40 }}>
        <Slider
          min={101}
          max={201}
          step={null}
          label={[
            {
              value: 101,
            },
            {
              value: 114,
            },
            {
              value: 133,
            },
            {
              value: 201,
            },
          ]}
        />
      </div>
    </>
  );
};
export default BasicUsage;
