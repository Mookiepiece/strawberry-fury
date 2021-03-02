import React from 'react';

type DialogProps = {
  haircut?: boolean;
  width?: string | number;
  height?: string | number;
  background?: string;
};

const Button: React.FC<DialogProps> = ({ haircut, children, width, height, background }) => {
  return (
    <button className="sf-button" style={{ width, height, background }}>
      {children}
      {haircut ? <div className="sf-hair"></div> : null}
    </button>
  );
};

export default Button;
