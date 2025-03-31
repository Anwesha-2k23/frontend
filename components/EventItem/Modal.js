// components/EventItem/Modal.js
import React from 'react'
import styles from './Modal.module.css'
import { IoMdCloseCircleOutline } from "react-icons/io";


const Modal = ({ isOpen, onClose, event }) => {
    function handleRuleBookClick(url) {
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error('No URL provided for the rule book.');
        }
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
  <div
    className={styles.modal}
    onClick={(e) => e.stopPropagation()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div className={styles.titleBox}>
      <h2 className={styles.title} id="modal-title">
        {event["Event Name"]}
      </h2>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close Modal"
      >
        <IoMdCloseCircleOutline size={30} className={styles.closeicon} />
      </button>
    </div>

    <hr
      style={{
        height: "1px",
        margin: "14px 0",
        backgroundColor: "black",
        border: "none",
      }}
    />

    <div className={styles.innerContainer}>
      <div className={styles.leftBLock}>
        <img
          src={
            event.poster
              ? event.poster
              : "/events/modalimg.png"
          }
          className={styles.item}
          alt={`${event["Event Name"]} Poster`}
          objectFit="contain"
        />
        <div>
          <div className={styles.registerButtonBox}>
            <p className={styles.registerButton}>Coming Soon</p>
          </div>
          <div className={styles.RuleButtonBox}>
            <p className={styles.ruleBookButton}>Rule Book Soon</p>
          </div>
        </div>
      </div>

      <div className={styles.verticalline}></div>

      <div className={styles.rightBlock}>
        <p>
          Date:{" "}
          <span style={{ fontWeight: "bold" }}>
            {event["Date"] ? event["Date"] : "To Be Announced"}
          </span>
        </p>
        <p>
          Venue:{" "}
          <span style={{ fontWeight: "bold" }}>
            {event["Venue"] ? event["Venue"] : "To Be Announced"}
          </span>
        </p>
        <p>
          {event["Description"]
            ? event["Description"]
            : "TO BE RELEASED SOON"}
        </p>
        <br />
        <p style={{ fontWeight: "bold" }}>Participation:</p>
        <p>
          Registration Fee ₹{" "}
          <span style={{ fontWeight: "bold" }}>
            {event.registerationFee
              ? event.registerationFee
              : "To Be Announced"}
          </span>
        </p>
        <p>
          Registration closes on{" "}
          <span style={{ fontWeight: "bold" }}>
            {event.registerationclosingdate
              ? event.registerationclosingdate
              : "To Be Announced"}
          </span>
        </p>
        <p>
          Prizes Worth:{" "}
          <span style={{ fontWeight: "bold" }}>
            {event.priceworth ? event.priceworth : "To Be Announced"}
          </span>
        </p>
        <br />
        <p>
          Organizers:{" "}
          <span style={{ fontWeight: "bold" }}>
            {event["Subcoords involved"]}
          </span>
        </p>
        <br />
      </div>
    </div>
  </div>
</div>

    )
}

export default Modal
