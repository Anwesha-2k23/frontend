import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'
import DisplayRiveSAC from '../components/Rive/DisplayRiveSAC'
import DisplayRiveGymkhana from '../components/Rive/DisplayRiveGymkhana'

const index = () => {

  return (
    <>
    <div className={styles.parentcontainer}>
        <div className={styles.container}>
          <DisplayRiveAnwesha />
          <DisplayRiveAdmin />
          <DisplayRiveSAC />
          <DisplayRiveGymkhana />
          <Image src="/home/Lecture_hall_island.png" alt="Lecture hall island" width={141} height={144} className={styles.lecturehall}/>
        </div>

    </div>
    </>
  )
}

export default index
