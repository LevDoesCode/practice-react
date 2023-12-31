import ExpenseItem from "./components/ExpenseItem";
import ExpenseItem2 from "./components/ExpenseItem2";
import ExpenseItem3 from "./components/ExpenseItem3";
import ExpenseItem4 from "./components/ExpenseItem4";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <div> This is also visible! </div>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            {/* Passing the whole object as a prop */}
            <ExpenseItem2 expense={expenses[0]}></ExpenseItem2>
            {/* Descructuring from the argument */}
            <ExpenseItem3 title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem3>
            {/* Descructuring on a separate line */}
            <ExpenseItem4 expense={expenses[2]}></ExpenseItem4>
        </div>
    );
}

export default App;
