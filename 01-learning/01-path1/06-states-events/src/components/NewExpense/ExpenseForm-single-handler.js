import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
    const [, setEnteredTitle] = useState("");
    const [, setEnteredAmount] = useState("");
    const [, setEnteredDate] = useState("");

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setEnteredTitle(value);
        } else if (identifier === "amount") {
            setEnteredAmount(value);
        } else if (identifier === "date") {
            setEnteredDate(value);
        }
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            inputChangeHandler("title", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(event) => {
                            inputChangeHandler("amount", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2024-01-01"
                        max="2027-12-31"
                        onChange={(event) => {
                            inputChangeHandler("date", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
