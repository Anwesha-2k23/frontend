import React from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'

const index = () => {
  return (
    <div className={styles.parentcontainer}>
        <DisplayRiveAnwesha/>
        <DisplayRiveAdmin/>
    </div>
  )
}

export default index
