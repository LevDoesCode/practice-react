import React from "react"; // Optional in newer versions of React

import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
