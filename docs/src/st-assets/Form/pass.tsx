import React, { useState } from 'react';
import { Form, Button, Input } from 'starfall';

const Pass: React.FC = () => {
  const [initialValue] = useState({
    hair: '',
    checkHair: '',
  });

  const formRef = Form.useRef<{
    hair: string;
    checkHair: string;
  }>();

  return (
    <>
      <div style={{ maxWidth: 300 }}>
        <Form<{ hair: string; checkHair: string }>
          initialValue={initialValue}
          ref={formRef}
          action={async value => {
            alert(`🎉${JSON.stringify(value, null, 4)}`);
          }}
        >
          <Form.Item
            label="User Hair"
            name="hair"
            rules={[
              {
                type: 'string',
                validator: () => {
                  formRef.current?.value.checkHair && formRef.current?.validate(['checkHair']);
                  return [];
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="User Hair Plus"
            name="checkHair"
            rules={[
              {
                type: 'string',
                validator: (rules, value) => {
                  if (formRef.current?.value.hair !== value) {
                    return ['value must equal'];
                  }
                  return [];
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div>
            <Form.SubmitButton primary>提交 Submit</Form.SubmitButton>
            &nbsp;
            <Button type="reset">重置 Reset</Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default Pass;
