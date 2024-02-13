import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const handleAddUser = (event) => {
        event.preventDefault();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
