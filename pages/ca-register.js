import Head from 'next/head'
import styles from '../styles/ca.module.css'
import Navbar from '../components/Navbar/Navbar'
import CampusAmbassadorForm from '../components/CampusAmbassadorForm';
import GreetingLottie from "../components/displaylottie";

export default function CampusAmbassador() {
  return (
    <>
      <Head>
        <title>Campus Ambassador - Anwesha 2023</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./AnwehsaIcon.png" />
      </Head>
      {/* <Navbar /> */}
      <div className={styles.container}>
        
        <CampusAmbassadorForm />
      </div>
    </>
  );
}
