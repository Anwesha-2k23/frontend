import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/comingsoon.module.css';

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
export default function comingsoon() {

    return (
      <>
        <Head>
          <title>Anwesha 2023 - Coming Soon</title>
          <meta name="description" content="Anwesha 2023" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className={styles.anwesha_bg_img}>
          <h1>COMING SOON</h1>
        </div>
        <Footer/>
      </>
    );
  }