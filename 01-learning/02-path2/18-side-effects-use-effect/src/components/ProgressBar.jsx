import { useEffect, useState } from "react";

export default function ProgressBar({ time }) {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("INTERVAL");
            setRemainingTime((prevTime) => prevTime - 50);
        }, 50);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress max={time} value={remainingTime}></progress>;
}
