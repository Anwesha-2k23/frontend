import Head from 'next/head'
import styles from '../styles/metaverse.module.css'
import UserRegisterForm from '../components/UserRegister-Login'
import React from 'react'
import dynamic from 'next/dynamic'

const Iframe = dynamic(() => import('../components/lazyIframe'), { ssr: false })

export default function userRegister() {
    // const lIframe = lazy(() => lazyIframe)
    return (
        <>
            <Head>
                <title>Metaverse - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/* <Navbar /> */}
            <Iframe />
        </>
    )
}
