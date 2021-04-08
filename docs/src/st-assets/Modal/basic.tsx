import React, { useState } from 'react';
import { Button, Modal } from 'starfall';

const BasicUsage: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <Button primary onClick={() => setState(true)}>
        打开对话框
      </Button>
      <Modal visible={state} onClose={() => setState(false)}>
        内容
      </Modal>
    </>
  );
};
export default BasicUsage;
