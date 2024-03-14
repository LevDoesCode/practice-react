import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => {
            return !prevState;
        });
    }

    let playerBox = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerBox = <input type="text" required />;
    }

    return (
        <li>
            <span className="player">
                {playerBox}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
