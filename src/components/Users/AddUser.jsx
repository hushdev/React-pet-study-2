import React, { useState, useRef } from "react";
import styles from "./AddUser.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const age = ageInput.current.value;

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

    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title="Error"
          error={error}
          onConfirm={() => setError("")}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler} className={styles.form}>
          <label htmlFor="username">Name</label>
          <input ref={nameInput} id="username" type="text" />

          <label htmlFor="age">Age</label>
          <input ref={ageInput} id="age" type="number" />

          <Button>Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
