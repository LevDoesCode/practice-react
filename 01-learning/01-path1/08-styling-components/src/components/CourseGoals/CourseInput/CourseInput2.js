import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button2";
import "./CourseInput.css";

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }

    &.invalid_input input {
        border-color: #dc3545;
        background: #f9c0c0;
    }

    &.invalid_input label {
        color: #dc3545;
    }
`;

const FormControl2 = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${(props) => (props.invalid === "true" ? "#dc3545" : "initial")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.invalid === "true" ? "#dc3545" : "#ccc")};
        background: ${(props) => (props.invalid === "true" ? "#f9c0c0" : "initial")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        background: ${(props) => (props.invalid === "true" ? "#f9c0c0" : "#fad0ec")};
        border-color: ${(props) => (props.invalid === "true" ? "#dc3545" : "#8b005d")};
    }
`;

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
            <FormControl className={!isValid && "invalid_input"}>
                <label>Course Goal</label>
                <input type="text" value={enteredValue} ref={inputRef} onChange={goalInputChangeHandler} />
            </FormControl>
            <FormControl2 invalid={(!isValid).toString()}>
                <label>Course Goal</label>
                <input type="text" value={enteredValue} ref={inputRef} onChange={goalInputChangeHandler} />
            </FormControl2>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
