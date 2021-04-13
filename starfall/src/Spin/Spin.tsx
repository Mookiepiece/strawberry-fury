import React from 'react';
import { CSSTransition } from 'react-transition-group';

type SpinProps = {
  visible?: boolean;
  border?: 1 | 2 | 3;
};

const Spin: React.FC<SpinProps> = ({ visible = true, border = 3 }) => {
  return (
    <CSSTransition in={visible} timeout={300} classNames="st-spin" unmountOnExit>
      <div
        className="st-spin"
        style={
          {
            '--st-spin-border': border + 'px',
          } as React.CSSProperties
        }
      ></div>
    </CSSTransition>
  );
};

export default Spin;
