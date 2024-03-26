import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const title = "Investment Calculator";

const startValues = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
};

function App() {
    const [userInput, setUserInput] = useState(startValues);
    const inputIsValid = userInput.duration > 0 && userInput.expectedReturn > 0;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <>
            <Header title={title} />
            <UserInput userInput={userInput} onChange={handleChange} />
            {inputIsValid && <Results input={userInput} />}
            {!inputIsValid && <p className="center">Please enter valid input values</p>}
        </>
    );
}

export default App;
