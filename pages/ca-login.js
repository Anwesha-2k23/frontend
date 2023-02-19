import Head from 'next/head'
import styles from '../styles/ca.module.css'
import Navbar from '../components/Navbar/Navbar'
import CampusAmbassadorLogin from '../components/CampusAmbassadorForm/login'
import GreetingLottie from '../components/displaylottie'

export default function caLogin() {

  return (
    <>
      <Head>
        <title>Campus Ambassador - Anwesha 2023</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./logo_no_bg.svg" />
      </Head>
      {/* <Navbar /> */}
      <div className={styles.container}>
        
        <CampusAmbassadorLogin />
      </div>
    </>
  );

}
