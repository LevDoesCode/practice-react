import ExpenseItem4 from "./ExpenseItem4";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem4 expense={expense} />
            ))}
        </div>
    );
}

export default Expenses;
