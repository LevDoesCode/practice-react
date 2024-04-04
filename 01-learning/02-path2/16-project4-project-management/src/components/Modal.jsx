import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";
import Button from "./Button";

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
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form
                method="dialog"
                className="mt-4 text-right"
            >
                <Button>{buttonText}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});
