import React, { useRef, useState } from 'react';
import Form, { FormInstance } from '🦄/StForm';
import Button from '🦄/StButton';
import Input from '🦄/StInput';

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    hair: '',
  });
  const formRef = useRef<FormInstance>(null);

  return (
    <>
      <Form
        value={value}
        ref={formRef}
        action={v => alert(`submit${JSON.stringify(v)}`)}
        onChange={setValue}
      >
        <Form.Item label="User Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="User Hair"
          name="hair"
          rules={[
            { type: 'string', min: 10, message: 'User hair must longer than 10' },
            { required: true, message: 'hair is rrrrrrequired' },
          ]}
        >
          <Input />
        </Form.Item>
        <button type="submit">Submit1</button>
        <Button type="submit">Submit2</Button>
      </Form>
      <button onClick={() => formRef.current?.validate().catch(e => alert(e.errors[0].message))}>
        mannually validate and submit
      </button>
      <button onClick={() => formRef.current?.reset()}>mannually reset</button>
    </>
  );
};
export default BasicUsage;
