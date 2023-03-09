import React from 'react'
import styles from '../styles/merchandise.module.css'

function merchandise() {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src="/merch/merch_blue.png"/>
        <img src="/merch/merch_white.png"/>
        <img src="/merch/merch_black.png"/>
      </div>
      <div>
      <div className={styles.payment_buttons}>
        <a href='' target='_blank'>Buy 1 @ <span>₹ 749 /-</span></a>
        <a href='' target='_blank'>Buy 2 @ <span className={styles.prev_price}>₹ <span>799</span></span><span>₹ 749 /-</span></a>
        <a href='' target='_blank'>Buy 3 @ <span className={styles.prev_price}>₹ <span>1199</span></span><span>₹ 1099 /-</span></a>
      </div>
        <a href='/merch/size_chart.pdf' target='_blank' className={styles.size_chart}>Size Chart</a>
      </div>
    </div>
  )
}

export default merchandise