import React from 'react';

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={e => onChange!(e.target.value)} />;
};

export default Input;
