import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
    const [inputState, setInputState] = useState(null);
    const handleCalculate = (userInput) => {
        setInputState(userInput);
    };

    const yearlyData = [];

    if (inputState) {
        let currentSavings = +inputState["current-savings"];
        const yearlyContribution = +inputState["yearly-contribution"];
        const expectedReturn = +inputState["expected-return"] / 100;
        const duration = +inputState["duration"];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    return (
        <div>
            <Header />
            <Form onCalculate={handleCalculate} />
            <Table />
            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}
        </div>
    );
}

export default App;
