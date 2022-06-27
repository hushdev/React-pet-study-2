import React from "react";
import styles from "./UsersList.module.scss";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.listCard}>
      <ul className={styles.list}>
        {props.users.map((item) => (
          <li key={item.id}>{item.name} <span>{item.age} y.o</span></li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
