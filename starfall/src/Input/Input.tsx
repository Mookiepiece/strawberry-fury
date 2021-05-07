import React from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'value' | 'onChange'>;

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  if (typeof value !== 'string' || !onChange) {
    // form items will provide value and onChange handler, so they are optional
    throw new Error('[St Input] missing prop `value` and `onChange`');
  }

  return (
    <input
      className="st-input"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default Input;
