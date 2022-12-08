import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/comingsoon.module.css";
export default function comingsoon() {
  return (
    <div className={styles.comingsoon_body}>
      <script async src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GOOGLE_ANALYTICS}></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', process.env.GOOGLE_ANALYTICS);
      </script>
      <Head>
        <title>Anwesha 2023 - Coming Soon</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./AnwehsaIcon.png" />
      </Head>
      <div className={styles.anwesha_bg_img}>
        <div className={styles.container}>
          <Image src="/A_logo.png" width={400} height={400} />

          <div className={styles.text}>
            <p style={{ marginBottom: 10, paddingRight: 5 }}>
              <span className={styles.anweshaText} style={{ color: "#660101" }}>
                Anwesha
              </span>
              <span className={styles.anweshaText} style={{ color: "#CB4846" }}>
                {" "}
                ‘23{" "}
              </span>
            </p>
            <p className={styles.iitp}>IIT PATNA</p>
            <p className={styles.comingsoon}>COMING SOON...</p>
          </div>
        </div>

        <div className={styles.parent}>
          <div className={styles.socials}>
            <div className={styles.imageElement}>
              <Link
                href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <Image src="/instalogo.png" width={50} height={50} />
              </Link>
            </div>
            <div className={styles.imageElement}>
              <Link
                href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
                target="_blank"
              >
                <Image src="/ytlogo.png" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
