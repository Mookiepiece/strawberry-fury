import React, { useState } from 'react';
import { Form, Button, Input } from 'starfall';
import { RuleItem } from 'async-validator';

const apiUser = (s: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (/^\d/.test(s)) {
        reject({
          code: 666,
          message: 'username cannot starts with number 1234567890',
        });
      } else if (s === 'hack') {
        reject({
          code: 555,
          message: 'server error',
        });
      }
      resolve(0);
    }, 2000);
  });
};

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    hair: '',
  });

  const formRef = Form.useRef();

  const [nameRule, setNameRule] = useState<RuleItem[]>([{ required: true }]);

  return (
    <>
      <Form<{
        name: string;
        hair: string;
      }>
        value={value}
        onChange={setValue}
        ref={formRef}
        action={[
          async v =>
            apiUser(v.name)
              .then(() => {
                alert('🎉');
              })
              .catch(async e => {
                if (e.code === 666 && e.message) {
                  formRef.current?.setValidateStatus('name', {
                    state: 'error',
                    message: e.message,
                  });
                  setNameRule([
                    { required: true },
                    {
                      validator(r, value, callback) {
                        if (value === v.name) {
                          callback('our api seems to not like this name, please pick another');
                        }
                        callback();
                      },
                    },
                  ]);
                } else {
                  alert('💢 server error');
                }
              }),
          errors => {
            alert('💢' + JSON.stringify(errors, null, 4));
          },
        ]}
      >
        <Form.Item label="User Name" name="name" rules={nameRule}>
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
                      resolve();
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
          <Form.SubmitButton>提交 Submit</Form.SubmitButton>
        </Form.Content>
      </Form>
    </>
  );
};
export default BasicUsage;
