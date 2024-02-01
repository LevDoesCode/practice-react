import React, { useState, useRef, useEffect } from "react";

import Button from "../../UI/Button/Button2";
import "./CourseInput.css";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const inputRef = useRef();

    // Focus an input element when the component is rendered (mounted)
    useEffect(() => {
        inputRef.current.focus();
    }, []); // Empty dependency array ensures this effect runs once after the initial render

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
            <div className={`form-control ${isValid ? "" : "invalid_input"}`}>
                <label>Course Goal</label>
                <input type="text" value={enteredValue} ref={inputRef} onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
