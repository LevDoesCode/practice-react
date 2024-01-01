import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem4(props) {
    const { date, title, amount } = props.expense;
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem4;
