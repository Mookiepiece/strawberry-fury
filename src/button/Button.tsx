import React from 'react';

type DialogProps = {
  haircut?: boolean;
  width?: string | number;
  height?: string | number;
};

const Button: React.FC<DialogProps> = ({ haircut, children, width, height }) => {
  return (
    <button className="sf-button" style={{ width, height }}>
      {children}
      {haircut ? <div className="sf-hair"></div> : null}
    </button>
  );
};

export default Button;
