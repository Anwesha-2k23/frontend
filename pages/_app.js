import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { AuthProvider, PrivateRoute } from '../components/authContext'
import { useRouter } from 'next/router'
import styles from '../styles/comingsoon.module.css'
// const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
//     ssr: false,
// })
import Navbar from '../components/Navbar-temp'
// import Navbar from '../components/Navbar/Navbar'

import Footer from '../components/Footer/Footer'

const poppins = Poppins({
    weight: ['400', '600', '900'],
    subsets: ['latin'],
})
function MyApp({ Component, pageProps }) {
    const router = useRouter()
    // const showHeader = router.pathname === '/ca-register' || '/ca-login' ? false : true;
    let showHeader = true
    // if (
    //     router.pathname === '/ca-login' ||
    //     router.pathname === '/userLogin' ||
    //     router.pathname === '/userRegister'
    // ) {
    //     showHeader = false
    // }
    return (
        <main className={poppins.className} style={{ background: 'linear-gradient(169deg, #81D9FF -5.25%, #D4F2FF 111.03%)' }}>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script strategy="lazyOnload" id="google-analytics">
                {`

          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
            </Script>
            <AuthProvider>
                {showHeader && <Navbar />}
                {/* {showHeader && <div style={{height: '30%'}}/>} */}
                <div className={styles.main_component}>
                    <PrivateRoute>
                        <Component {...pageProps} />
                    </PrivateRoute>
                </div>
                <Footer />
            </AuthProvider>
        </main>
    )
}

export default MyApp
