import Head from 'next/head'
import Image from 'next/image'
import dynamic from "next/dynamic";

import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

const Countdown = dynamic(() => import('../components/Countdown/index'), {
  ssr: false,
});

export default function Home() {

  return (
    <>
      <Head>
        <title>Anwesha 2023</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.hero}>
        <Countdown dateTo="February 17, 2023 00:00:00 GMT+05:30" callback={() =>console.log("Anwesha 2023 is Here!!!")}/>
      </div>
    </>
  );
}
