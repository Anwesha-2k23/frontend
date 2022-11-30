import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/comingsoon.module.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function comingsoon() {
  return (
    <div className={styles.comingsoon_body}>
      <Head>
        <title>Anwesha 2023 - Coming Soon</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./AnwehsaIcon.png" />
      </Head>
      {/* <Navbar /> */}
      <div className={styles.anwesha_bg_img}>
        <h1 className={styles.bgText}>COMING SOON...</h1>
      </div>
      <div className={styles.socials}>
        <div className={styles.imageElement}>
          <Link href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y=" target="_blank">
            <Image src="/instalogo.png" width={50} height={50} alt=""/>
          </Link>
        </div>
        <div className={styles.imageElement}>
          <Link href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur" target="_blank">
            <Image src="/ytlogo.png" width={50} height={50} alt=""/>
          </Link>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
