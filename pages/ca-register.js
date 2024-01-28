import Head from 'next/head'
import styles from '../styles/ca.module.css'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
    ssr: false,
})
import CampusAmbassadorForm from '../components/CampusAmbassadorForm'
import GreetingLottie from '../components/displaylottie'

export default function caRegister() {
    return (
        <>
            <Head>
                <title>Campus Ambassador - Anwesha 2024</title>
                <meta name="description" content="Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <div style={{ height: 40 }}></div>
            <div className={styles.container}>
                <CampusAmbassadorForm />
            </div>
        </>
    )
}
