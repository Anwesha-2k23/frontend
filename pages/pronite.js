import styles from '../styles/pronite.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'

import EventItem from '../components/EventItem'
import { AuthContext } from '../components/authContext.js'
import ProTicket from '../components/Rive/ProTicket'
import EliteTicket from '../components/Rive/EliteTicket'

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
          if(userData.state.user.user_type === 'iitp_student'){
              proniteIDs.push('EVTe96c6');
              proniteIDs.push('EVT8e600');
            }
            else{
              proniteIDs.push('EVT7a8a7');
              proniteIDs.push('EVT691bc');
          }
        }
        async function fetchData() {
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
        }
        fetchData()
    }, [proniteEvents, userData])

    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Pronite - Anwesha 2024</title>
                <meta name="description" content="Pronite-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div className={styles.hero}>
                <img src="/pronite/heading.png" alt="" className={styles.hero_heading} />
            </div>
            <div className={styles.passes}>
                <div className={styles.pass_header}>
                    <h1 className={styles.heading}>Nights with Superstars</h1>
                    <h3 className={styles.heading_text}>Get your passes to unlock the awesomeness!</h3>
                </div>
                <div className={styles.pass_container}>
                <ProTicket/>
                <EliteTicket/>
                </div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/cultural.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>Cultural Night</h1>
                    <div className={styles.section_text}>Step into the epitome of musical extravagance at Anwesha's gala event. Previous years witnessed the magic of KK and Sanam, and this year, anticipation soars as the iconic Amit Trivedi graces the stage. With dynamic lights, resounding melodies, and an unparalleled atmosphere, the night promises a glamorous, amazing, and unforgettable experience. Anwesha's signature event is set to be the zenith of cultural celebration, featuring the brilliance of Amit Trivedi in a performance that will leave an indelible mark on the tapestry of our festivities.</div>
                </div>
                <div className={styles.section_container}></div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/edm.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>EDM Night</h1>
                    <div className={styles.section_text}>Step into the epitome of musical extravagance at Anwesha's gala event. Previous years witnessed the magic of KK and Sanam, and this year, anticipation soars as the iconic Amit Trivedi graces the stage. With dynamic lights, resounding melodies, and an unparalleled atmosphere, the night promises a glamorous, amazing, and unforgettable experience. Anwesha's signature event is set to be the zenith of cultural celebration, featuring the brilliance of Amit Trivedi in a performance that will leave an indelible mark on the tapestry of our festivities.</div>
                </div>
                <div className={styles.section_container}></div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/bollywood.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>Bollywood Night</h1>
                    <div className={styles.section_text}>Step into the epitome of musical extravagance at Anwesha's gala event. Previous years witnessed the magic of KK and Sanam, and this year, anticipation soars as the iconic Amit Trivedi graces the stage. With dynamic lights, resounding melodies, and an unparalleled atmosphere, the night promises a glamorous, amazing, and unforgettable experience. Anwesha's signature event is set to be the zenith of cultural celebration, featuring the brilliance of Amit Trivedi in a performance that will leave an indelible mark on the tapestry of our festivities.</div>
                </div>
                <div className={styles.section_container}></div>
            </div>
            {/* <div style={{ height: 100 }}></div>
            <div className={styles.container}>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
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
                        {userData.isAuth ? "Wallet payments (Paytm, PhonePe etc) are not accepted !" : <Link href="/userLogin" style={{textDecoration: "none", color: "red"}}>Please <u>Login</u> to Continue</Link>}
                    </h2>
                </div>
              </div>
              <div className={styles.content}>
                    {proniteEvents.map((event, index) => {
                        return <EventItem event={event} key={index} />
                    })}
              </div>
            </div> */}
        </div>
    )
}
export default Pronite
