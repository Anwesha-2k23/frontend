import Head from 'next/head'
import styles from '../styles/ca.module.css'
import Navbar from '../components/Navbar/Navbar'
import ForgotPassword from '../components/UserRegister-Login/forgot-password'
import GreetingLottie from '../components/displaylottie'

export default function forgotPassword() {
    return (
        <>
            <Head>
                <title>Password Reset - Anwesha 2024</title>
                <meta name="description" content="Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <div className={styles.container} loading='lazy'>
                <ForgotPassword />
            </div>
        </>
    )
}
