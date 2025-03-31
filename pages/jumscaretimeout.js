import React, { useState, useEffect } from "react";
import styles from "./jumscare.module.css"
const CountdownTimer = () => {
  const [count, setCount] = useState(3); // Start count from 3

  useEffect(() => {
    if (count <= 0) return; // Stop when count reaches 0

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1); // Decrease count every second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [count]); // Dependency on `count`

  return (
    <div className={styles.CountdownTimer}>
      <p>{count}</p>
    </div>
  );
};

export default CountdownTimer;
