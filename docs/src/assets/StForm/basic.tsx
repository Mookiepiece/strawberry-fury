import React, { useState } from 'react';
import { StForm, StButton, StInput } from '🦄';

const BasicUsage: React.FC = () => {
  const [value, setValue] = useState({
    name: '',
    hair: '',
  });
  const [isValidating, setIsValidating] = useState(false);

  const formRef = StForm.useRef();

  return (
    <>
      <StForm<{
        name: string;
        hair: string;
      }>
        value={value}
        onChange={setValue}
        ref={formRef}
        onSubmit={v => alert(`submit${JSON.stringify(v)}`)}
        onValidateStatusChange={setIsValidating}
      >
        <StForm.Item label="User Name" name="name" rules={[{ required: true }]}>
          <StInput />
        </StForm.Item>
        <StForm.Item
          label="User Hair"
          name="hair"
          rules={[
            { type: 'string', min: 10, message: 'User hair must longer than 10' },
            { required: true, message: 'hair is rrrrrrequired' },
          ]}
        >
          <StInput />
        </StForm.Item>
        <StForm.Item
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
          {({ value, onChange }) => <StInput value={value} onChange={onChange} />}
        </StForm.Item>
        <StForm.Content>
          <StButton primary type="submit">
            提交 Submit
          </StButton>
          <StButton type="reset">重置 Reset</StButton>
        </StForm.Content>
      </StForm>
      <br />
      <p>{isValidating ? 'Validating...' : 'Idle'}</p>
      <StButton onClick={() => formRef.current?.validate().catch(e => alert(e.errors[0].message))}>
        手动提交 mannually validate and submit
      </StButton>
      <StButton onClick={() => formRef.current?.reset()}>手动重置 mannually reset</StButton>
    </>
  );
};
export default BasicUsage;
