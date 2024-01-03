import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "Enter a title...",
        enteredAmount: "0.1",
        enteredDate: "",
    });

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            console.log("title");
            setUserInput((prevState) => {
                return { ...prevState, enteredTitle: value };
            });
        } else if (identifier === "amount") {
            console.log("amount");
            setUserInput((prevState) => {
                return { ...prevState, enteredAmount: value };
            });
        } else if (identifier === "date") {
            console.log("date");
            setUserInput((prevState) => {
                return { ...prevState, enteredDate: value };
            });
        }
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder={userInput.enteredTitle}
                        onChange={(event) => {
                            inputChangeHandler("title", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min={"0.01"}
                        step="0.01"
                        placeholder={userInput.enteredAmount}
                        onChange={(event) => {
                            inputChangeHandler("amount", event.target.value);
                        }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value="2024-01-01"
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
