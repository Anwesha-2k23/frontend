import React, { useEffect, useState } from 'react'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'

const index = () => {
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1550);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div className={styles.parentcontainer}>
      {isDesktop ? (
        <div className={styles.container}>
          <DisplayRiveAnwesha />
          <DisplayRiveAdmin styling={{position: 'absolute',top: '200px',height: '750px'}} />
          <HomeBackgroundAnimation riveUrl="/Anwesha_animations.riv" artboardName={'SAC'} styling={{ height: '500px', width: '500px', position: 'absolute', top: '40%', left: '2%' }} />
          <HomeBackgroundAnimation riveUrl="/Anwesha_animations.riv" artboardName={'Gymkhana'} styling={{ height: '350px', width: '350px', position: 'absolute', top: '50%', left: '75%' }} />

        </div>
      ) : (
        <div className={styles.container}>
          <DisplayRiveAnwesha />
          <DisplayRiveAdmin />

        </div>
      )
      }
    </div>
  )
}

export default index
