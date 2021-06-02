import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '@starfall/Button';
import { Portal } from '@starfall/_utils/Portal';

type ModalProps = {
  visible: boolean;
  title?: string;
  onClose?: () => void;
  noHeader?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  width?: string | number;
  maxWidth?: string | number;

  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  onVisibilityChange?: (visible: boolean) => void;
} & React.HTMLProps<HTMLDivElement>;

const Modal: React.FC<ModalProps> = props => {
  const {
    visible,
    title,
    onClose,
    noHeader,
    closable = true,
    maskClosable = true,
    width,
    maxWidth,
    style,
    children,

    mountOnEnter,
    unmountOnExit,
    onVisibilityChange,
    ...rest
  } = props;
  return (
    <Portal>
      <CSSTransition
        timeout={300}
        in={visible}
        classNames="st-modal-wrap"
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        onEnter={onVisibilityChange && (() => onVisibilityChange(true))}
        onExit={onVisibilityChange && (() => onVisibilityChange(false))}
      >
        <div
          className="st-modal-wrap"
          style={{
            width,
            maxWidth,
            ...style,
          }}
          {...rest}
        >
          <div className="st-modal__mask" onClick={maskClosable ? onClose : undefined}></div>
          <div className="st-modal">
            <div className="st-modal__header">
              <div className="st-modal__title">{title}</div>
              {closable ? (
                <Button textual className="st-modal__close" onClick={onClose}>
                  ×
                </Button>
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
