// simple react modal component
import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const closeHandler = () => {
    props.closeHandler(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modal_head}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.modal_body}>
          <p>{props.body}</p>
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.btn} onClick={(e) => closeHandler()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
