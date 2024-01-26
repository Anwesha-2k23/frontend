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

const proniteDetails = [
    {
        "description": "MODELING WORKSHOP AND INTERACTIVE PERSONALITY BOOST SESSION WITH MISS GRAND\r\nINDIA 2022\r\n -- “PRACHI NAGPAL”\r\n\r\nInsta handle: https://www.instagram.com/praachinagpal?igsh=ZThxNmJxZzkyeGw1\r\n\r\nEarly Bird Offer:\r\n149/ person\r\nLater Charges:\r\n199/ person\r\n\r\nRegister soon to avail Early bird offer !",
        "end_time": "2024-02-02T11:30:00Z",
        "id": "EVT6a873",
        "is_active": true,
        "is_online": false,
        "is_solo": true,
        "max_team_size": 1,
        "min_team_size": 1,
        "name": "MODELING WORKSHOP (1 Person)",
        "order": -1,
        "organizer": [],
        "poster": "https://drive.google.com/thumbnail?id=18cLzKuPzyT86h5KvyrHguLiXrduqOwu7&sz=500w",
        "prize": "0",
        "registration_deadline": "2024-02-02T10:30:00Z",
        "registration_fee": "149.00",
        "registration_link": "",
        "start_time": "2024-02-02T10:30:00Z",
        "tags": "5",
        "venue": "TBD (offline , IITP)",
        "video": ""
    }
]

const Pronite = () => {
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Pronite - Anwesha 2024</title>
                <meta name="description" content="Pronite-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div style={{ height: 100 }}></div>
            <div className={styles.container}>
                <div className={styles.titleBox}>
                    <br />
                    <br />
                    <br />
                    <h1 className={josefinSans.className}>Pronite</h1>
                    <p className={montserrat.className} style={{ fontWeight: 'bold' }}>
                        From heart-stopping dance battles and soulful singing
                        competitions to the dazzling glamour of the fashion
                        show, with thought-provoking Nukkad Nataks and the
                        lyrical echoes of poetry slams, Anwesha's events ignite
                        every artistic spark. Come, delve into Anwesha's events,
                        where every beat has a story to tell and every
                        expression finds a stage!
                    </p>
                    <br />
                    <br />
                    <br />
                    <h2 style={{ color: 'red', fontWeight: 'bold' }}>
                        Wallet payments (Paytm, PhonePe etc) are not accepted !</h2>
                </div>
                <div className={styles.content}>
                    {/* {events.map((event, index) => {
                        return <EventItem event={event} key={index} />
                    })} */}
                    {proniteDetails.map((event, index) => {
                        return <EventItem event={event} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Pronite
