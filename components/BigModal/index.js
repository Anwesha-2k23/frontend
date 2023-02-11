// simple react modal component
import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
      <React.StrictMode>
          <div className={styles.modal}>
              <div className={styles.modalContent}>
                  <div className={styles.modal_head}>
                      <h1>{props.title}</h1>
                  </div>
                  <div className={styles.modal_body}>
                      <p>{props.body}</p>
                  </div>
                  <div className={styles.modal_footer}>
                      <button
                          className={styles.btn}
                          onClick={(e) => props.closeHandler()}
                      >
                          Register
                      </button>
                      <button
                          className={styles.btn}
                          onClick={(e) => props.closeHandler()}
                      >
                          Rulebook
                      </button>
                  </div>
              </div>
          </div>
      </React.StrictMode>
  )
};

export default Modal;
