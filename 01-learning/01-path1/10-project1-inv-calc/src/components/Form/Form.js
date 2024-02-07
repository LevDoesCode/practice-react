import { useState } from "react";

const startUserInput = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
};

const Form = (props) => {
    const [userInput, setUserInput] = useState({ startUserInput });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInput);
        console.log("Form submitted");
        props.onCalculate(userInput);
    };

    const handleReset = (event) => {
        event.preventDefault();
        setUserInput(startUserInput);
    };

    const handleInputChange = (inputID, value) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputID]: value,
            };
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) => handleInputChange("current-savings", event.target.value)}
                        value={userInput["current-savings"]}
                        type="number"
                        id="current-savings"
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => handleInputChange("yearly-contribution", event.target.value)}
                        value={userInput["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        onChange={(event) => handleInputChange("expected-return", event.target.value)}
                        value={userInput["expected-return"]}
                        type="number"
                        id="expected-return"
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => handleInputChange("duration", event.target.value)}
                        value={userInput["duration"]}
                        type="number"
                        id="duration"
                    />
                </p>
            </div>
            <p className="actions">
                <button onClick={handleReset} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default Form;
