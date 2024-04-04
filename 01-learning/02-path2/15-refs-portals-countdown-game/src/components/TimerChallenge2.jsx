import { useRef, useState } from "react";
import ResultModalAPI from "./ResultModalAPI";

const interval = 10;

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = 0 < timeRemaining && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        console.log("Timer expired");
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, interval);
    }

    function handleStop() {
        dialog.current.open();
        console.log("Clicked stop");
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModalAPI ref={dialog} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime === 1 ? "" : "s"}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
