import React, { useEffect } from "react";
import styles from "./ErrorModal.module.scss";
import Button from "../UI/Button";
import Card from "./Card";

const ErrorModal = (props) => {
  useEffect(() => {
    // Closing modal by ESC or ENTER
    const close = (e) => {
      if (e.keyCode === 27 || e.keyCode === 13) {
        props.onConfirm();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [props]);

  return (
    <>
      <div className={styles.overlay}></div>
      <Card className={styles.modal}>
        <div className={styles.header}>{props.title}</div>
        <div className={styles.body}>{props.error}</div>
        <Button className={styles.btn} onClick={props.onConfirm}>
          Got it
        </Button>
      </Card>
    </>
  );
};

export default ErrorModal;
