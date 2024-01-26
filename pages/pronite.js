import styles from '../styles/events.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'

import EventItem from '../components/EventItem'
import { AuthContext } from '../components/authContext.js'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

const josefinSans = Josefin_Sans({
    weight: ['700'],
    subsets: ['latin'],
})

// add event ids here
const proniteIDs = []

const Pronite = () => {
    const [proniteEvents, setProniteEvents] = useState([])
    const userData = useContext(AuthContext)
    useEffect(() => {
        let host = process.env.NEXT_PUBLIC_HOST
        if(userData.isAuth){
          if(userData.state.user.user_type === 'student'){
            proniteIDs.push('EVTcf525');
            proniteIDs.push('EVTcac95');
            proniteIDs.push('EVT66e40');
          }
          else if(userData.state.user.user_type === 'iitp_student'){
            proniteIDs.push('EVT68cb3');
            proniteIDs.push('EVT49870');
          }
        }
        proniteIDs.forEach(async (id) => {
            try {
                const res = await fetch(`${host}/event/allevents`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                let result = data.filter((event) => {
                    if (proniteIDs.includes(event.id)) {
                        return true
                    }
                    return false
                })
                setProniteEvents(result)
            } catch (e) {
                console.log('Failed to fetch')
            }
            console.log(proniteEvents)
        })
    }, [userData])

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
                      Step into the epitome of musical extravagance at Anwesha's gala event. Previous years witnessed the magic of KK and Sanam, and this year, anticipation soars as the iconic Amit Trivedi graces the stage. With dynamic lights, resounding melodies, and an unparalleled atmosphere, the night promises a glamorous, amazing, and unforgettable experience. Anwesha's signature event is set to be the zenith of cultural celebration, featuring the brilliance of Amit Trivedi in a performance that will leave an indelible mark on the tapestry of our festivities.
                    </p>
                    <br />
                    <br />
                    <br />
                    <h2 style={{ color: 'red', fontWeight: 'bold' }}>
                        {userData.isAuth ? "Wallet payments (Paytm, PhonePe etc) are not accepted !" : "Please login to buy Pronite tickets."}
                    </h2>
                </div>
                <div className={styles.content}>
                    {proniteEvents.map((event, index) => {
                        return <EventItem event={event} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Pronite
