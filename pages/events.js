import styles from '../styles/events.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'

import EventItem from '../components/EventItem'

const Events = () => {    
    return (
        <div className={styles.container}>
            <Head>
                <title>Events - Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            <div style={{height: 100}}></div>
            <div className={styles.container}>
                <h1>Events</h1>

                <div className={styles.content}>
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                </div>
            </div>
        </div>
    )
}
export default Events
