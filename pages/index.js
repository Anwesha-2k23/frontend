import React from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/DisplayRiveAnwesha'

const index = () => {
  return (
    <div className={styles.parentcontainer}>
        <DisplayRiveAnwesha/>
        <HomeBackgroundAnimation />
    </div>
  )
}

export default index
