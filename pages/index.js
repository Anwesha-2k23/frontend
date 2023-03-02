import React from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/DisplayRiveAnwesha'

const index = () => {
  return (
    <div className={styles.parentcontainer}>
        <DisplayRiveAnwesha/>
    </div>
  )
}

export default index
