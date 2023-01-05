import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
    ssr: false,
})
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
              <title>Anwesha 2023</title>
              <meta name="description" content="Anwesha 2023" />
              <link rel="icon" href="./AnwehsaIcon.png" />
          </Head>

          <Navbar />

          <div style={{ width: '100vw', height: '100px' }}></div>
          <div className={styles.anwesha_bg_img}>
              <div className={styles.container}>
                  <Image src="/A_logo.png" width={400} height={400} />

                  <div className={styles.text}>
                      <p style={{ marginBottom: 10, paddingRight: 5 }}>
                          <span
                              className={styles.anweshaText}
                              style={{ color: '#660101' }}
                          >
                              Anwesha
                          </span>
                          <span
                              className={styles.anweshaText}
                              style={{ color: '#CB4846' }}
                          >
                              {' '}
                              ‘23{' '}
                          </span>
                      </p>
                      <p className={styles.iitp}>IIT PATNA</p>
                  </div>
              </div>
          </div>

          {/* Campus Ambassador */}
          <div className={styles.ca}>
              <Link href="/campusambassador">
                  <div className={styles.ca_poster}></div>
              </Link>
              <div className={styles.ca_info}>
                  <Link href="/campusambassador">
                      <h1 className={styles.ca_heading}>
                          Campus Ambassador Programme
                      </h1>
                  </Link>
                  <p className={styles.ca_text}>
                      Join Anwesha's campus ambassador programme and seize the
                      opportunity to become the face of your college!
                  </p>
                  <Link href="/ca-register">
                      <button className={styles.ca_button}>
                          Register Now!
                      </button>
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
  )
}
