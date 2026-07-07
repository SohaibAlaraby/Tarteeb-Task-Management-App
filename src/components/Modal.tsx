import { type  ComponentPropsWithoutRef, useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

export interface DialogRef {
    open: () => void;
    close: ()=>void;
}

interface ModalIntf extends ComponentPropsWithoutRef<'dialog'>{
    ref?: React.Ref<DialogRef>;
    isOpen?:boolean;
}
export function Modal({children,ref, ...props}:ModalIntf) {
    const dialog = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref,
      () => {
        return {
            open(){
                dialog.current?.showModal();
            },
            close(){
                dialog.current?.close();
            }

        }
      },
      [] );

      const modalRoot = document.getElementById('Modal');
      if(!modalRoot) return null;

    return (
    createPortal(<dialog {...props} ref={dialog} closedby="none">
        {children}
    </dialog>, modalRoot)
    );
}