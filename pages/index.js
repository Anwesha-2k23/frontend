import React, { useEffect, useState } from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'
import DisplayRiveSAC from '../components/Rive/DisplayRiveSAC'
import DisplayRiveGymkhana from '../components/Rive/DisplayRiveGymkhana'

const index = () => {

  return (
    <div className={styles.parentcontainer}>

        <div className={styles.container}>
          <DisplayRiveAnwesha />
          <DisplayRiveAdmin />
          <DisplayRiveSAC />
          <DisplayRiveGymkhana />

        </div>

    </div>
  )
}

export default index
