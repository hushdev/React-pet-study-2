import React, { useState } from "react";
import styles from "./AddUser.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (name && name.trim().length === 0) {
      setError("Name is required");
      return;
    }

    if (+age === 0) {
      setError("Age is required");
      return;
    }

    if (+age < 0 || age > 150) {
      setError("Age must be between 0 and 150");
      return;
    }

    props.onAddUser(name, age);

    setError("");
    setName("");
    setAge("");
  };

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
    {error && <ErrorModal title="Error" error={error} onConfirm={() => setError("")} />}
      <Card>
        <form onSubmit={addUserHandler} className={styles.form}>
          <label htmlFor="username">Name</label>
          <input
            value={name}
            onInput={changeNameHandler}
            id="username"
            type="text"
          />

          <label htmlFor="age">Age</label>
          <input
            value={age}
            onInput={changeAgeHandler}
            id="age"
            type="number"
          />

          <Button>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
