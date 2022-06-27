import React, { useState } from "react";
import "./App.scss";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    const user = {name, age, id: Math.random().toString()};
    setUsersList([...usersList, user]);
  };

  return (
    <div className="container p-1">
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
};

export default App;
