import styles from '../styles/pronite.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router.js'
import EventItem from '../components/EventItem/index.js'
import { AuthContext } from '../components/authContext.js'
import ProTicket from '../components/Rive/ProTicket.js'
import EliteTicket from '../components/Rive/EliteTicket.js'
import { soloEventRegistration,soloEventRegistrationiitp } from '../components/Event Registration/proniteRegistration.js'
import blacklist from '../components/blacklist.js'

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

const josefinSans = Josefin_Sans({
    weight: ['700'],
    subsets: ['latin'],
})

const proniteIDs = []

const PASS_IITP_GENERAL = 'EVTe96c6'
const PASS_IITP_SPECIAL = 'EVT8e600'
const PASS_GENERAL = 'EVT7a8a7'
const PASS_SPECIAL = 'EVT691bc'

const Registration = () => {
    const router = useRouter()
    const [proniteEvents, setProniteEvents] = useState([])
    const [profile, setProfile] = useState()
    const userData = useContext(AuthContext)
    useEffect(() => {
        setProfile(userData)
        let host = process.env.NEXT_PUBLIC_HOST
        if(userData.isAuth){
          if(userData.state.user.user_type === 'iitp_student'){
              proniteIDs.push(PASS_IITP_GENERAL);
              proniteIDs.push(PASS_IITP_SPECIAL);
            }
            else{
              proniteIDs.push(PASS_GENERAL);
              proniteIDs.push(PASS_SPECIAL);
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
    }, [proniteIDs, userData])

    function handleRagister(id) {
        if (profile.isAuth) {
                if (profile.state.user.user_type !== 'iitp_student') {
                    if (id == 0){
                        soloEventRegistration(
                            PASS_SPECIAL,
                            1499,
                            profile.state.user.email_id,
                            profile.state.user.phone_number,
                            profile.state.user.anwesha_id
                        )
                    }
                    else if (id == 1){
                        soloEventRegistration(
                            PASS_GENERAL,
                            999,
                            profile.state.user.email_id,
                            profile.state.user.phone_number,
                            profile.state.user.anwesha_id
                        )
                    }
                }

                else {
                    if (id == 0){
                        soloEventRegistration(
                            PASS_IITP_SPECIAL,
                            699,
                            profile.state.user.email_id,
                            profile.state.user.phone_number,
                            profile.state.user.anwesha_id
                        )
                    }
                    else if (id == 1){
                        // check if used email is in blacklist
                        if (blacklist.includes(profile.state.user.email_id)) {
                            console.log("blacklist detected")
                            soloEventRegistration(
                                PASS_IITP_GENERAL,
                                500,
                                profile.state.user.email_id,
                                profile.state.user.phone_number,
                                profile.state.user.anwesha_id
                            )
                        } else {
                            console.log("Not blacklist detected")
                            soloEventRegistrationiitp(
                                PASS_IITP_GENERAL
                            )
                        }
                    }
                }
                // console.log(userData.state.user)
        } else {
            router.push('/userLogin')
        }
    }

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
                    <h1 className={styles.heading}>Anwesha Fest Pass</h1>
                    <h3 className={styles.heading_text}>Get your pass to unlock the awesomeness!</h3>
                </div>
                <div className={styles.pass_container}>
                    <div style={{ cursor: 'pointer' }} onClick={() => { handleRagister(1) }}><ProTicket /></div>
                    {/* <div style={{cursor: 'pointer'}} onClick={()=>{handleRagister(0)}}><EliteTicket /></div> */}
                </div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/cultural.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>Cultural Night</h1>
                    <div className={styles.section_text}>Anwesha's Cultural Night, Virasat'24, by SPIC MACAY, is a vibrant showcase of Indian culture. With mesmerizing Qawwali melodies and energetic Purulia Chhau dance, it celebrates India's rich cultural tapestry. Accomplished artists and rising talents promise an unforgettable evening of rhythmic beats and graceful movements.</div>
                </div>
                <div className={styles.section_container}></div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/edm.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>EDM Night</h1>
                    <div className={styles.section_text}>Dive into sonic bliss at our EDM night. Let DJs weave exhilarating beats on the dance floor, creating an unforgettable experience of pulsating rhythms. Join us for an immersive night of electronic enchantment with vibrant lights, energetic beats, and contagious energy.</div>
                </div>
                <div className={styles.section_container}></div>
            </div>
            <div className={styles.cultural} style={{backgroundImage: "url('/pronite/bollywood.png')"}}>
                <div className={styles.section_container}>
                    <h1 className={styles.section_heading}>Bollywood Night</h1>
                    <div className={styles.section_text}>IIT Patna's Anwesha brings back the dazzling Bollywood night, Pronite! Featuring the musical maestro behind hits like "Badtameez Dil" and "Pashmina," this event follows the legacy of Sanam Band and KK. Join us for a night of vibrant melodies, pulsating beats, and Bollywood magic as Pronite 2024 lights up the town under the disco ball!</div>
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
export default Registration
