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
            <Results input={userInput} />
        </>
    );
}

export default App;
