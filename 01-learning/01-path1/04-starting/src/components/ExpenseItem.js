import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2030, 8, 8);
    const expenseTitle = "Fire Insurance";
    const expenseAmount = 234.33;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
