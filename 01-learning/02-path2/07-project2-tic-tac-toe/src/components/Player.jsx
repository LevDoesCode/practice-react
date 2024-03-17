import { useRef, useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const inputRef = useRef(null);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState);
        if (isEditing) {
            inputRef.current.focus();
        }
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value);
    }

    function handleFocus(event) {
        event.target.select();
    }

    let playerBox = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerBox = <input type="text" required value={playerName} onChange={handleInputChange} ref={inputRef} />;
        btnCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {playerBox}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
        </li>
    );
}
