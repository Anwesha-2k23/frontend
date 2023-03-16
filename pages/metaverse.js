import Head from 'next/head'
import styles from '../styles/metaverse.module.css'
import UserRegisterForm from '../components/UserRegister-Login'

export default function userRegister() {
    return (
        <>
            <Head>
                <title>Metaverse - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <iframe src="/IITP1/index.html" className={styles.metaverse_frame}/>
        </>
    )
}
