import styles from '../styles/events.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import EventItem from '../components/EventItem'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        let host = process.env.NEXT_PUBLIC_HOST

        async function callAPI() {
            try {
                const res = await fetch(`${host}/event/allevents`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                setEvents(data)
            } catch (e) {
                console.log('Failed to fetch')
            }
        }
        callAPI()
    }, [])
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Events - Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div style={{ height: 100 }}></div>
            <div className={styles.container}>
                <h1>Events</h1>

                <div className={styles.content}>
                    {events.map((event, index) => {
                        return <EventItem event={event} key={index}/>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Events
