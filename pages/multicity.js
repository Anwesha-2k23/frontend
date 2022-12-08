import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Multicity.module.css'

import Navbar from '../components/Navbar/Navbar'

export default function Multicity() {
    return (
        <>
            <script async src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GOOGLE_ANALYTICS}></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', process.env.GOOGLE_ANALYTICS);
            </script>
            <Head>
                <title>Multicity - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.multicityTitle}>Multicity</h1>
                <div className={styles.multicityHeroContent}>
                    <div className={styles.heroPara}>
                        <h2 className={styles.heroParaHeading}>Lorem</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae aut velit porro harum repudiandae ratione voluptates quidem, corporis cumque ex omnis, vel voluptate, eius ipsum natus esse voluptas ut. Doloremque vel odio sint sapiente quisquam dolore corrupti, possimus sunt praesentium impedit laboriosam dolor delectus recusandae! Non facilis nulla optio animi repudiandae maiores laboriosam eaque consequatur beatae officia necessitatibus in, vel autem assumenda omnis impedit tenetur iure! Veniam qui accusantium non.</p>
                    </div>
                    <button style={styles.heroButton}>Register</button>
                    <button style={styles.heroButton}>Rule Book</button>
                </div>
            </div>
            <div className={styles.event}>
                <h1 className={styles.multicityTitle}>Events</h1>
                <div className={styles.eventsCarousel}>
                    <div className={styles.carouselImg}></div>
                    <div className={styles.carouselImg}></div>
                    <div className={styles.carouselImg}></div>
                </div>
                <div className={styles.eventButtons}>
                    <span className={styles.register}>Register</span>
                    <span className={styles.ruleBook}>Rulebook</span>
                </div>
            </div>
        </>
    );
}
