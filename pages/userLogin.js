import Head from 'next/head'
import styles from '../styles/ca.module.css'
import UserLoginForm from '../components/UserRegister-Login/login'


export default function userLogin() {

    return (
        <>
            <Head>
                <title>User Login - Anwesha 2024</title>
                <meta name="description" content="Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <div className={styles.container} loading='lazy'>

                <UserLoginForm />;
            </div>
        </>
    )
}
