import React, { useState } from 'react';
import { Form, Input } from 'starfall';

const List: React.FC = () => {
  const [initialValue] = useState({
    user: {
      name: '',
      hair: '',
    },
  });

  const formRef = Form.useRef<{
    user: {
      name: '';
      hair: '';
    };
  }>();

  return (
    <>
      <Form<{
        user: {
          name: string;
          hair: string;
        };
      }>
        initialValue={initialValue}
        ref={formRef}
        action={async v => alert('🎉' + JSON.stringify(v, null, 4))}
      >
        <Form.Item<{
          name: string;
          hair: string[];
        }> name="user">
          {({ value: user, onChange }) => {
            return (
              <>
                <p>
                  I got {user.name} and {user.hair}
                </p>
                <Form.Item label="User Name" name="user.name">
                  {({ value, withLabel }) =>
                    withLabel(
                      (console.log('[docs][nesting] rerendered'),
                      (
                        <Input
                          value={value}
                          onChange={name =>
                            onChange({
                              ...user,
                              name,
                            })
                          }
                        />
                      ))
                    )
                  }
                </Form.Item>
                <Form.Item label="User Hair (wrong usage)" name="user.hair">
                  <Input />
                </Form.Item>
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
