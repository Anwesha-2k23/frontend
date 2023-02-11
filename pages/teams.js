import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GreetingLottie from '../components/displaylottie'
import styles from '../styles/teams.module.css'
// import Anwesha_text from "../images/Anwesha_text.png";

export default function campusAmbassador() {
    return (
        <div className={styles.campusamb_body}>
            <Head>
                <title>Anwesha 2023 - teams</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            {/* <div style={{ height: '100px' }}></div> */}
            <div className={styles.anwesha_bg_img}>
                <motion.div
                    className={styles.hero_text}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className= {styles.teams_heading}>OUR TEAM</h1>

                    
                </motion.div>
            </div>
            
            {/* <Footer/> */}
        </div>
    )
}
