import React from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'

const index = () => {
  return (
    <div className={styles.parentcontainer}>
        Hello World
        <HomeBackgroundAnimation />
    </div>
  )
}

export default index