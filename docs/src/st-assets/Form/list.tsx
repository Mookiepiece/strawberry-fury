import React, { useState } from 'react';
import { Button, Form, Input } from 'starfall';

const List: React.FC = () => {
  const [initialValue] = useState({
    name: '',
    hair: [],
  });

  const formRef = Form.useRef<{
    name: string;
    hair: string[];
  }>();

  return (
    <>
      <Form<{
        name: string;
        hair: string[];
      }>
        initialValue={initialValue}
        ref={formRef}
        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}
      >
        <Form.Item label="User Name" name="name" rules={{ required: true }}>
          <Input />
        </Form.Item>
        <Form.Item<string[]> name="hair">
          {({ value, onChange }) => {
            return (
              <>
                {value.map((_, index) => {
                  return (
                    <Form.Item
                      key={index}
                      label={`User Hair ${index}`}
                      name={`hair.${index}`}
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
                      <Input />
                    </Form.Item>
                  );
                })}
                <Button
                  onClick={() =>
                    formRef.current?.set(v => ({
                      ...v,
                      hair: [...v.hair, Date.now().toString()],
                    }))
                  }
                >
                  Add
                </Button>
                <Button onClick={() => onChange(value.slice(0, -1))}>Rm</Button>
              </>
            );
          }}
        </Form.Item>
        <Form.SubmitButton>提交 Submit</Form.SubmitButton>
      </Form>
    </>
  );
};
export default List;
