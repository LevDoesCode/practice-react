import React, { useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        console.log("EFFECT RUNNING - Every component render");
    });

    useEffect(() => {
        console.log("EFFECT RUNNING - Only first render");
    }, []);

    useEffect(() => {
        console.log("EFFECT RUNNING - When dependencies change");
    }, [enteredPassword]);

    useEffect(() => {
        console.log("EFFECT RUNNING - When dependencies change");

        // Clean up only after the first render and when the depenencies are removed
        return () => {
            console.log("EFFECT CLEANUP - When dependencies change");
        };
    }, [enteredPassword]);

    useEffect(() => {
        console.log("EFFECT RUNNING - Only first render");

        // Clean up only after the first render and when the depenencies are removed
        return () => {
            console.log("EFFECT CLEANUP - When removed from the DOM");
        };
    }, []);

    useEffect(() => {
        // Debouncing - to avoid unnecessary checks
        const loginButtonSetter = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
        }, 1000);

        // Cleanup function - to avoid memory leaks
        return () => {
            clearTimeout(loginButtonSetter);
            console.log("CLEANUP");
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
