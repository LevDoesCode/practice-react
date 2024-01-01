import ExpenseItem4 from "./ExpenseItem4";
import Card from "../ui/Card";
import "./Expenses.css";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem4 key={expense.id} expense={expense} />
            ))}
        </Card>
    );
}

export default Expenses;
