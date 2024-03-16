import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => {
            return !prevState;
        });
    }

    let playerBox = <span className="player-name">{name}</span>;
    let btnCaption = "Edit";
    if (isEditing) {
        playerBox = <input type="text" required value={name} />;
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
