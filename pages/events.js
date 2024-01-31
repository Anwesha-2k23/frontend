import styles from '../styles/events.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import EventItem from '../components/EventItem'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

const josefinSans = Josefin_Sans({
    weight: ['700'],
    subsets: ['latin'],
})

const Events = () => {
    const [events, setEvents] = useState([])
    let exceludedEvents = ['EVTcf525', 'EVTcac95', 'EVT66e40', 'EVT68cb3', 'EVT49870', 'EVTe96c6', 'EVT8e600', 'EVT7a8a7', 'EVT691bc', 'EVTba113', 'EVT2842f']

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
                let result = data.filter((event) => {
                    if (exceludedEvents.includes(event.id)) {
                        return false
                    }
                    return true
                })
                setEvents(result)
            } catch (e) {
                console.log('Failed to fetch')
            }
        }
        callAPI()
    }, [])

    console.log(events);
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Events - Anwesha 2024</title>
                <meta name="description" content="Events-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div style={{ height: 100 }}></div>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <br />
                    <br />
                    <br />
                    <h1 className={josefinSans.className}>Events</h1>
                    <p className={montserrat.className} style={{ fontWeight: 'bold' }}>
                        From heart-stopping dance battles and soulful singing
                        competitions to the dazzling glamour of the fashion
                        show, with thought-provoking Nukkad Nataks and the
                        lyrical echoes of poetry slams, Anwesha's events ignite
                        every artistic spark. Come, delve into Anwesha's events,
                        where every beat has a story to tell and every
                        expression finds a stage!
                    </p>
                    <Link href="https://drive.google.com/file/d/1Sn8CSO_6k3gP2vQkjbguoJPbw73SC_QV/view" target='_blank' className={styles.rulebook}>
                        Events Brochure
                    </Link>
                    <br />
                    <br />
                    <br />
                    <h2 style={{ color: 'red', fontWeight: 'bold' }}>
                        Wallet payments (Paytm, PhonePe etc) are not accepted !</h2>
                </div>
                <div className={styles.content}>
                    {events.map((event, index) => {
                        return <EventItem event={event} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Events
