import React from 'react';
declare type ModalProps = {
    visible: boolean;
    title?: string;
    onClose?: () => void | Promise<void> | boolean | Promise<boolean>;
    noHeader?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    width?: string | number;
    maxWidth?: string | number;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    onVisibilityChange?: (visible: boolean) => void;
} & React.HTMLProps<HTMLDivElement>;
declare let registry: number[];
declare const ModalMitt: import("@starfall/_utils/mitt").Emitter<{
    REGISTER: number;
    UNREGISTER: number;
    REMOTE_CLOSE: number;
}>;
declare const Modal: React.FC<ModalProps> & {
    Mitt: typeof ModalMitt;
    registry: typeof registry;
};
export default Modal;
