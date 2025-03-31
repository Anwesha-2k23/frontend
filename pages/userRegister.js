import Head from 'next/head'
import styles from '../styles/ca.module.css'
import UserRegisterForm from '../components/UserRegister-Login'

export default function userRegister() {
    return (
        <>
            <Head>
                <title>User Register - Anwesha 2025</title>
                <meta name="description" content="Anwesha 2025" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>

            <div className={styles.container} loading="lazy">

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
