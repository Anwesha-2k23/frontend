import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/ca.module.css'
import ChangePassword from '../../../components/UserRegister-Login/password_reset'

export default function userLogin() {
    return (
        <>
            <Head>
                <title>Password Reset - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <div className={styles.container}>
                <ChangePassword />
            </div>
        </>
    )
}
