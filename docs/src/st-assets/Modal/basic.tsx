import React, { useState } from 'react';
import { Button, Modal } from 'starfall';

const BasicUsage: React.FC = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  return (
    <>
      <Button primary onClick={() => setState(true)}>
        打开对话框
      </Button>
      <Modal title="标题" visible={state} onClose={() => setState(false)}>
        内容
        <Button onClick={() => setState2(true)}>打开第二个</Button>
      </Modal>
      <Modal title="标题" visible={state2} onClose={() => setState2(false)}>
        第二个模态框
      </Modal>
    </>
  );
};
export default BasicUsage;
