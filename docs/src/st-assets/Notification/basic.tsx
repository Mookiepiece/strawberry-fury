import React, { useState } from 'react';
import { Button, Notification } from 'starfall';

const BasicUsage: React.FC = () => {
  return (
    <>
      <Button primary onClick={() => Notification.push(<h1>abcdefg</h1>)}>
        打开对话框
      </Button>
    </>
  );
};
export default BasicUsage;
