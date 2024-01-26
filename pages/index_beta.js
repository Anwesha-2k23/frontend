import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

const Countdown = dynamic(() => import('../components/Countdown/index'), {
    ssr: false,
})

export default function Home() {
    // temporary: redirect to './comingsoon.js' for the time being on load time until lading page is ready
    useEffect(() => {
        window.location.href = '/comingsoon'
    }, [])

    return (
        <>
            <Head>
                <title>Anwesha 2024</title>
                <meta name="description" content="Anwesha 2024" />
                <link rel="icon" href="/AnweshaIcon.png" />
            </Head>
            <div className={styles.hero}>
                <Countdown
                    dateTo="March 17, 2024 00:00:00 GMT+05:30"
                    callback={() => console.log('Anwesha 2024 is Here!!!')}
                />
            </div>
        </>
    )
}
