import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import styles from "../styles/comingsoon.module.css";
export default function comingsoon() {
  useEffect(() => {
    
    var d = document
    var w="https://tally.so/widgets/embed.js"
    var v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className={styles.comingsoon_body}>
      <Head>
        <title>Anwesha 2023 - Coming Soon</title>
        <meta name="description" content="Anwesha 2023" />
        <link rel="icon" href="./AnwehsaIcon.png" />
      </Head>
      
      <div className={styles.socials}>
        <div className={styles.imageElement}>
          <Link
            href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <Image src="/instagram.svg" width={40} height={40} />
          </Link>
        </div>
        <div className={styles.imageElement}>
          <Link
            href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
            target="_blank"
          >
            <Image src="/youtube.svg" width={40} height={40} />
          </Link>
        </div>
        <div className={styles.imageElement}>
          <Link href="https://twitter.com/anweshaiitpat" target="_blank">
            <Image src="/twitter.svg" width={40} height={40} />
          </Link>
        </div>
        <div className={styles.imageElement}>
          <Link
            href="https://www.facebook.com/anwesha.iitpatna/"
            target="_blank"
          >
            <Image src="/facebook.svg" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div className={styles.anwesha_bg_img}>
        <img
          src="/hero_text.png"
          alt="Anwesha text"
          className={styles.anwesha_text_image}
        />
        {/* <h1 className={styles.bgText}>COMING SOON...</h1> */}
      </div>

      {/* Campus Ambassador */}
      <div className={styles.ca}>
        <Link href="/campusambassador">
          <div className={styles.ca_poster}></div>
        </Link>
        <div className={styles.ca_info}>
          <Link href="/campusambassador">
            <h1 className={styles.ca_heading}>Campus Ambassador</h1>
          </Link>
          <p className={styles.ca_text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            expedita voluptas vitae accusantium animi. Labore perferendis rem
            placeat quod corporis quas eius quibusdam id, veniam illo aut
            mollitia dolore doloremque cupiditate, debitis quos molestiae totam!
            Eligendi ad reprehenderit, exercitationem iusto, vero corrupti
            quibusdam animi odio, praesentium delectus obcaecati debitis!
            Reiciendis amet natus atque eum harum nobis, iste ad repellendus
            voluptate odio deleniti dolorem veniam temporibus distinctio
            voluptates assumenda aspernatur! Perferendis dicta libero atque
            officia quaerat maxime nam
          </p>
          <Link href="/ca-register">
            <button className={styles.ca_button}>Register Now!</button>
          </Link>
        </div>
      </div>

      {/* Anwesha Dispatch */}
      <div className={styles.dispatch_form}>
        <iframe
          data-tally-src="https://tally.so/embed/mRW0rJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="1326"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Anwesha Dispatch"
        ></iframe>
      </div>
      {/* <script>
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
      </script> */}

      {/* <Footer/> */}
    </div>
  );
}
