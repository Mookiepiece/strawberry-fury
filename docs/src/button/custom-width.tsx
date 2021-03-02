import React from 'react';
import Button from '🦄/button';

export default function BasicUsage() {
  return (
    <div>
      <Button width={100} height={50} background="powderblue">
        Button
      </Button>
      <div style={{ display: 'inline-block', width: 20 }}></div>
      <Button width={50} height={50} background="#ddf">
        ⚆_⚆
      </Button>
    </div>
  );
}
