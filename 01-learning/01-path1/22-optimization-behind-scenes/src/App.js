import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("App running");

    const handleToggleParagraph = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const handleAllowToggle = () => {
        setAllowToggle(!allowToggle);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={handleAllowToggle}>Allow Toggle</Button>
            <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
