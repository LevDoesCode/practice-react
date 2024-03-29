import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
        });
    };

    return (
        <div>
            <Wrapper>
                <AddUser onAddUser={addUserHandler} />
                <UsersList users={usersList} />
            </Wrapper>
            <>
                <AddUser onAddUser={addUserHandler} />
                <UsersList users={usersList} />
            </>
            <React.Fragment>
                <AddUser onAddUser={addUserHandler} />
                <UsersList users={usersList} />
            </React.Fragment>
            <Fragment>
                <AddUser onAddUser={addUserHandler} />
                <UsersList users={usersList} />
            </Fragment>
        </div>
    );
}

export default App;
