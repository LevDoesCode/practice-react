import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import ResultModalAPI from "./ResultModalAPI";

let timer;

export default function TimerChallenge({ title, targetTime }) {
    const goodTimer = useRef(null);
    const dialog = useRef(null);

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    //const [timer, setTimer] = useState(null);

    function handleStart() {
        // timer = setTimeout(() => {
        //     setTimerExpired(true);
        //     setTimerStarted(false);
        // }, targetTime * 1000);
        goodTimer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerExpired(false);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(goodTimer.current);
        setTimerStarted(false);
    }

    return (
        <>
            <ResultModalAPI ref={dialog} result={timerExpired ? "Lost" : "Won"} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime === 1 ? "" : "s"}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
