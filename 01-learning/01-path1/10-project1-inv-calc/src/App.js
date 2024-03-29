import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
    const [inputState, setInputState] = useState(null);

    const handleCalculate = (userInput) => {
        console.log("userInput", userInput);
        // console.log("userInput", userInput);
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
        const yearlyData = []; // per-year results

        let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                initialInvestment: userInput["current-savings"],
            });
        }
        setInputState(yearlyData);
    };

    return (
        <div>
            <Header />
            <Form onCalculate={handleCalculate} />
            {!inputState && <p style={{ textAlign: "center" }}>Please enter the details to calculate the investment</p>}
            {inputState && <Table data={inputState} />}
            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}
        </div>
    );
}

export default App;
