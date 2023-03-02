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
        <HomeBackgroundAnimation riveUrl="/Anwesha_animations.riv" artboardName={'SAC'} styling={{ height: '500px', width: '500px', position: 'absolute', top: '40%', left: '2%' }} />
        <HomeBackgroundAnimation riveUrl="/Anwesha_animations.riv" artboardName={'Gymkhana'} styling={{ height: '350px', width: '350px', position: 'absolute', top: '50%', left: '75%' }} />
    </div>
  )
}

export default index
