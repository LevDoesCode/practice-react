import ExpenseItem4 from "./ExpenseItem4";
import "./Expenses.css";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem4 key={expense.id} expense={expense} />
            ))}
        </div>
    );
}

export default Expenses;
