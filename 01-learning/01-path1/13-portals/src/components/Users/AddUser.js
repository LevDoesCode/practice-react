import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const refNameInput = useRef();
    const refAgeInput = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserText = refNameInput.current.value;
        const enteredAgeText = refAgeInput.current.value;

        if (enteredUserText.trim().length === 0 || enteredAgeText.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values).",
            });
            return;
        }

        if (+enteredAgeText < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        props.onAddUser(enteredUserText, enteredAgeText);
        refNameInput.current.value = "";
        refAgeInput.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={refNameInput} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={refAgeInput} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
