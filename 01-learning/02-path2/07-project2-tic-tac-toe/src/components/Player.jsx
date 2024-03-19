import { useRef, useState, useEffect } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    let playerBox = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerBox = <input type="text" required value={playerName} onChange={handleInputChange} ref={inputRef} />;
        btnCaption = "Save";
    }

    function handleEditClick() {
        setIsEditing((prevState) => !prevState);
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerBox}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
        </li>
    );
}
