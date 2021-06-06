import React from 'react';
declare type ModalProps = {
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
declare const Modal: React.FC<ModalProps>;
export default Modal;
