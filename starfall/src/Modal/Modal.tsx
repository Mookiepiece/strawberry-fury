import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'starfall/_utils/Portal';

type ModalProps = {
  visible: boolean;
  onClose?: () => void;
  noHeader?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  width?: string | number;
  maxWidth?: string | number;
} & React.HTMLProps<HTMLDivElement>;

const Modal: React.FC<ModalProps> = props => {
  const {
    visible,
    onClose,
    noHeader,
    closable = true,
    maskClosable = true,
    width,
    maxWidth,
    style,
    children,
    ...rest
  } = props;
  return (
    <Portal>
      <CSSTransition timeout={300} in={visible} classNames="st-modal">
        <div
          className="st-modal"
          style={{
            width,
            maxWidth,
            ...style,
          }}
          {...rest}
        >
          <div className="st-modal__mask" onClick={maskClosable ? onClose : undefined}></div>
          <div className="st-modal__content">
            <div className="st-modal__header">
              {closable ? (
                <div className="st-modal__close" onClick={closable ? onClose : undefined}>
                  X
                </div>
              ) : null}
            </div>
            <div className="st-modal__body">{children}</div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
