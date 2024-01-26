import Head from 'next/head'
import styles from '../styles/ca.module.css'
import Navbar from '../components/Navbar/Navbar'
import UserRegisterForm from '../components/UserRegister-Login'
import GreetingLottie from '../components/displaylottie'

export default function userRegister() {
    return (
        <>
            <Head>
                <title>User Register - Anwesha 2024</title>
                <meta name="description" content="Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <div className={styles.container} loading='lazy'>
                <UserRegisterForm />
                {/* <img
                    className={styles.island}
                    alt="floating-island-iitp"
                    src="/login_register/portal.svg"
                /> */}
            </div>
        </>
    )
}
