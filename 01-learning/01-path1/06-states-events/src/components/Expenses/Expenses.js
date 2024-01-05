import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem2";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2024");

    let filterInfoText = "";
    if (filteredYear === "2023") {
        filterInfoText = "2024, 2025 & 2026";
    } else if (filteredYear === "2024") {
        filterInfoText = "2023, 2025 & 2026";
    } else if (filteredYear === "2025") {
        filterInfoText = "2023, 2024 & 2026";
    } else if (filteredYear === "2026") {
        filterInfoText = "2023, 2024 & 2025";
    }

    const filterYearHandler = (year) => {
        setFilteredYear(year);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilterYear={filterYearHandler} />
            <p>Data for years {filterInfoText} is hidden</p>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
    );
};

export default Expenses;
