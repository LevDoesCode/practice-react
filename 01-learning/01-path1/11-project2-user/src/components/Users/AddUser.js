import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    };

    const handleChangeUsername = (event) => {
        setEnteredUsername(event.target.value);
    };

    const handleChangeAge = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={handleChangeUsername} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={handleChangeAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
