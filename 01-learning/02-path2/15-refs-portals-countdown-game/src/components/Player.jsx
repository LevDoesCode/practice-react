import { useState } from "react";

export function PlayerState() {
    const [enteredPlayerName, setEnteredPlayerName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setSubmitted(false);
        setEnteredPlayerName(event.target.value);
    }

    function handleClick() {
        setSubmitted(true);
    }

    return (
        <section id="player">
            <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
            <p>Using State</p>
            <p>
                <input type="text" onChange={handleChange} value={enteredPlayerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

import { useRef } from "react";

export default function Player() {
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState("");

    function handleClick() {
        setEnteredPlayerName(playerName.current.value);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
            <p>Using Ref</p>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
