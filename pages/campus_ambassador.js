import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import Navbar from '../components/Navbar/Navbar'
import CampusAmbassadorForm from '../components/CampusAmbassadorForm';

export default function CampusAmbassador() {
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
                <title>Campus Ambassador - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <CampusAmbassadorForm/>
            </div>
        </>
    );
}
