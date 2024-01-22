import React, { useState, useRef } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const inputRef = useRef();

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        inputRef.current.focus();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        // setIsValid(true); // Only triggers after a submit button click
        props.onAddGoal(enteredValue);
        setEnteredValue("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
                <input
                    style={{ backgroundColor: isValid ? "white" : "pink", borderColor: isValid ? "initial" : "red" }}
                    type="text"
                    value={enteredValue}
                    ref={inputRef}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
