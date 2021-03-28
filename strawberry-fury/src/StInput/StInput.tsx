import React from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
} & React.HtmlHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  if (typeof value !== 'string' || !onChange) {
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
