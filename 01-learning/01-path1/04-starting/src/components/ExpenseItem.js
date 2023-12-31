import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>August 8th, 2030</div>
            <div className="expense-item__description ">
                <h2>Fire Insurance</h2>
                <div className="expense-item__price">$234.33</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
