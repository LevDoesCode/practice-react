import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const TIME = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    useEffect(() => {
        console.log("TIMER SET");
        const timer = setTimeout(() => {
            console.log("TIMER FIRED");
            onConfirm();
        }, 3000);

        return () => {
            console.log("TIMER CLEARED");
            clearTimeout(timer);
        };
    }, [onConfirm]);
    console.log("RENDER");

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
            <ProgressBar time={TIME} />
        </div>
    );
}
