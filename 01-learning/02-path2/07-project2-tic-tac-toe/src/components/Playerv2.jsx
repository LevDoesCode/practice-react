import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState("Edit");

    function handleEditClick() {
        setIsEditing((prevState) => {
            return prevState === "Edit" ? "Save" : "Edit";
        });
    }

    return (
        <li>
            <span className="player">
                {isEditing === "Edit" && <span className="player-name">{name}</span>}
                {isEditing === "Save" && <input type="text" />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing}</button>
        </li>
    );
}
