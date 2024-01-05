import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const yearFilterHandler = (event) => {
        props.onChangeFilterYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearFilterHandler} defaultValue={props.selected}>
                    <option value="" disabled hidden>
                        Year
                    </option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
