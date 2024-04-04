import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";

export default forwardRef(function Modal({ children, buttonText }, ref) {
    const dialog = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{buttonText}</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});
