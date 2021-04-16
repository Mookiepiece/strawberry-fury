import React, { useState } from 'react';
import { Form, Button, Input, Spin } from 'starfall';

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    hair: '',
  });
  const [value2, setValue2] = useState({
    name: '',
    hair: '',
  });

  const [isValidating, setIsValidating] = useState(false);
  const formRef = Form.useRef<{
    name: string;
    hair: string;
  }>();

  const mannuallySubmit = () => {
    setIsValidating(true);
    formRef.current
      ?.validate()
      .then(value => {
        alert('🎉' + JSON.stringify(value, null, 4));
      })
      .catch(e => alert(JSON.stringify(e, null, 4)))
      .finally(() => {
        setIsValidating(false);
      });
  };

  return (
    <>
      <Form<{
        name: string;
        hair: string;
      }>
        value={value}
        onChange={setValue}
        action={async value =>
          new Promise(resolve => {
            setTimeout(() => {
              alert(`submit${JSON.stringify(value)}`);
              resolve();
            }, 2000);
          })
        }
      >
        <Form.Item
          label="User Name"
          name="name"
          rules={[
            { required: true },
            {
              type: 'string',
              min: 5,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User Hair"
          name="hair"
          rules={[
            { type: 'string', min: 5, message: 'User hair must longer than 5' },
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
              asyncValidator: (rules, value) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (value.length < 10) {
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
          <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>
          <Button type="reset">重置 Reset</Button>
        </Form.Content>
      </Form>
      <br />
      <br />
      <Form<{
        name: string;
        hair: string;
      }>
        value={value2}
        onChange={setValue2}
        ref={formRef}
        onSubmit={mannuallySubmit}
      >
        <Form.Item
          label="User Name"
          name="name"
          rules={[
            { required: true },
            {
              type: 'string',
              min: 5,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User Hair"
          name="hair"
          rules={[
            { type: 'string', min: 5, message: 'User hair must longer than 5' },
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
              asyncValidator: (rules, value) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    if (value.length < 10) {
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
          <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>
          <Button type="reset">重置 Reset</Button>
        </Form.Content>
      </Form>
      <Button loading={isValidating} onClick={mannuallySubmit}>
        手动提交 mannually validate and submit
      </Button>
      <Button onClick={() => formRef.current?.reset()}>手动重置 mannually reset</Button>
    </>
  );
};
export default BasicUsage;
