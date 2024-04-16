import { useEffect, useState } from "react";

const TIME = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainingTime, setRemainingTime] = useState(TIME);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("INTERVAL");
            setRemainingTime((prevTime) => prevTime - 50);
        }, 50);
        return () => {
            clearInterval(interval);
        };
    }, []);

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
            <progress max={TIME} value={remainingTime}></progress>
        </div>
    );
}
