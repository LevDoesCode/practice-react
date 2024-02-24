import React, { useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    console.log("App running");

    const handleToggleParagraph = () => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {showParagraph && <p>This is new!</p>}
            <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
