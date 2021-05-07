import React, { useEffect, useRef, useState } from 'react';
import { Form, Input } from 'starfall';

const api = (s: string): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (s.startsWith('0')) {
        reject('cannot starts with zero');
      }
      resolve();
    }, 2000)
  );

const MyFormItem: React.FC = () => {
  const [validating, setValidating] = useState(false);
  const [validateSuccess, setValidateSuccess] = useState<string | undefined>();
  const key = useRef(0);

  return (
    <Form.Item<string>
      name="name"
      label="name"
      rules={[
        {
          async asyncValidator(rule, value) {
            if (validateSuccess === value) {
              return;
            }

            const k = ++key.current;
            setValidating(true);
            try {
              await api(value);
              if (key.current === k) {
                setValidateSuccess(value);
              }
            } finally {
              if (key.current === k) {
                setValidating(false);
              }
            }

            return;
          },
        },
      ]}
    >
      {({ withLabel, value, onChange }) => {
        return withLabel(
          <div
            style={{
              borderWidth: 5,
              borderStyle: 'solid',
              borderColor: validateSuccess === value ? 'lime' : validating ? 'gray' : 'transparent',
              transition: 'all .3s',
            }}
          >
            <Input value={value} onChange={onChange} />
          </div>
        );
      }}
    </Form.Item>
  );
};

const WithStatus: React.FC = () => {
  const [initialValue] = useState({
    name: '',
    hair: '',
  });

  const formRef = Form.useRef<{
    name: '';
    hair: '';
  }>();

  return (
    <>
      <Form<{
        name: string;
        hair: string;
      }>
        initialValue={initialValue}
        ref={formRef}
        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}
      >
        <MyFormItem />
        <Form.SubmitButton>提交 Submit</Form.SubmitButton>
      </Form>
    </>
  );
};
export default WithStatus;
