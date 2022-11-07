import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anwesha 2023</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={styles.container}>Hello World!</div>
    </>
  );
}
