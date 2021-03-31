import React, { useState } from 'react';
import { Form, Button, Input, Spin } from 'starfall';

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    hair: '',
  });
  const [isValidating, setIsValidating] = useState(false);

  const formRef = Form.useRef();

  return (
    <>
      <Spin />
      <Form<{
        name: string;
        hair: string;
      }>
        value={value}
        onChange={setValue}
        ref={formRef}
        onSubmit={v => alert(`submit${JSON.stringify(v)}`)}
        onValidateStatusChange={setIsValidating}
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
        <Form.Item
          label="User Hair Plus"
          name="hair"
          rules={[
            {
              type: 'string',
              asyncValidator: (rule, value) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (value.length < 5) {
                      reject('too short');
                    } else {
                      resolve(undefined);
                    }
                  }, 2000);
                });
              },
            },
          ]}
        >
          {({ value, onChange }) => <Input value={value} onChange={onChange} />}
        </Form.Item>
        <Form.Content>
          <Button primary type="submit">
            提交 Submit
          </Button>
          <Button type="reset">重置 Reset</Button>
        </Form.Content>
      </Form>
      <br />
      <p>{isValidating ? 'Validating...' : 'Idle'}</p>
      <Button onClick={() => formRef.current?.validate().catch(e => alert(e.errors[0].message))}>
        手动提交 mannually validate and submit
      </Button>
      <Button onClick={() => formRef.current?.reset()}>手动重置 mannually reset</Button>
    </>
  );
};
export default BasicUsage;
