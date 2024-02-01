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
import { soloEventRegistration, soloEventRegistrationiitp } from '../components/Event Registration/proniteRegistration.js'
import blacklist from '../components/blacklist.js'
import details from '../components/prof_staff_details.js'
import FacultyPass from '../components/FacultyPass'
import { Carousel } from 'react-responsive-carousel'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
const PASS_STAFF_GEN = ['EVT63763', 'EVTcb689', 'EVTa1ae2', 'EVT20570', 'EVT9dda6', 'EVTbdb92']
const PASS_STAFF_SPE = ['EVT12910', 'EVT8d60d', 'EVT291e3', 'EVT9fcc8', 'EVTc90d3', 'EVTbdbc6']

const Pronite = () => {
    const router = useRouter()
    const [proniteEvents, setProniteEvents] = useState([])
    const [profile, setProfile] = useState()
    const [isFacStaff, setIsFacStaff] = useState(false)
    const [generalPassCount, setGeneralPassCount] = useState(0)
    const [specialPassCount, setSpecialPassCount] = useState(0)
    const userData = useContext(AuthContext)
    useEffect(() => {
        setProfile(userData)
        let host = process.env.NEXT_PUBLIC_HOST
        if (userData.isAuth) {
            if (userData.state.user.user_type === 'iitp_student') {
                proniteIDs.push(PASS_IITP_GENERAL);
                proniteIDs.push(PASS_IITP_SPECIAL);
            }
            else {
                proniteIDs.push(PASS_GENERAL);
                proniteIDs.push(PASS_SPECIAL);
            }

            // check if email is contained in details array
            let email = userData.state.user.email_id
            let isFacStaff = false
            details.forEach((detail) => {
                if (detail.webmail === email) {
                    isFacStaff = true
                }
            })
            console.log("Faculty/Staff detected")
            setIsFacStaff(isFacStaff)
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
        }
        fetchData()
    }, [proniteIDs, userData])

    function handleRagister(id) {
        if (profile.isAuth) {
            if (profile.state.user.user_type !== 'iitp_student') {
                // id == 0 is unused
                if (id == 0) {
                    soloEventRegistration(
                        PASS_SPECIAL,
                        1499,
                        profile.state.user.email_id,
                        profile.state.user.phone_number,
                        profile.state.user.anwesha_id
                    )
                }
                else if (id == 1) {
                    soloEventRegistration(
                        PASS_GENERAL,
                        1199,
                        profile.state.user.email_id,
                        profile.state.user.phone_number,
                        profile.state.user.anwesha_id
                    )
                }
                else if (id == 3) {
                    if(generalPassCount > 0)
                        soloEventRegistrationiitp(
                            PASS_STAFF_GEN[generalPassCount-1]
                        )
                    else alert("Please select a valid number of passes")
                }
                else if (id == 4) {
                    if(specialPassCount > 0)
                        soloEventRegistration(
                            PASS_STAFF_SPE[specialPassCount-1],
                            449,
                            profile.state.user.email_id,
                            profile.state.user.phone_number,
                            profile.state.user.anwesha_id
                        )
                    else alert("Please select a valid number of passes")
                }
            }

            else {
                // id == 0 is unused
                if (id == 0) {
                    soloEventRegistration(
                        PASS_IITP_SPECIAL,
                        699,
                        profile.state.user.email_id,
                        profile.state.user.phone_number,
                        profile.state.user.anwesha_id
                    )
                }
                else if (id == 1) {
                    // check if used email is in blacklist
                    if (blacklist.includes(profile.state.user.email_id)) {
                        soloEventRegistration(
                            PASS_IITP_GENERAL,
                            699,
                            profile.state.user.email_id,
                            profile.state.user.phone_number,
                            profile.state.user.anwesha_id
                        )
                    } else {
                        soloEventRegistrationiitp(
                            PASS_IITP_GENERAL
                        )
                        toast.success('You are successfully registered', {
                            position: 'top-right',
                            autoClose: 10000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                        });
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
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Image
                    src="/pronite/logo.svg"
                    alt="logo"
                    height={75.4}
                    width={299}
                    className={styles.logo}
                />
                <div className={styles.festpass}>Fest Passes</div>
                <div className={styles.pass_container}>
                    {!isFacStaff && <div style={{ cursor: 'pointer' }} onClick={() => { handleRagister(1) }}><ProTicket /></div>}
                    {isFacStaff &&
                        <>
                            <div style={{ cursor: 'pointer', marginBottom: '30px' }}><FacultyPass type="General" />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <button className={styles.btn} onClick={() => {
                                        setGeneralPassCount((prev) => {
                                            if (prev > 0)
                                                return prev - 1
                                            return prev
                                        })
                                    }}>-</button>
                                    <div className={styles.generalPassCount}>{generalPassCount}</div>
                                    <button className={styles.btn} onClick={() => setGeneralPassCount((prev) => prev + 1)}>+</button>
                                </div>
                                <button className={styles.facultyBtn} onClick={() => { handleRagister(3) }}>Grab Now</button>
                            </div>

                            <div style={{ cursor: 'pointer' }}><FacultyPass type="Special" />
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <button className={styles.btn} onClick={() => {
                                        setSpecialPassCount((prev) => {
                                            if (prev > 0)
                                                return prev - 1
                                            return prev
                                        })
                                    }}>-</button>
                                        <div className={styles.generalPassCount}>{specialPassCount}</div>
                                    <button className={styles.btn} onClick={() => setSpecialPassCount((prev) => prev + 1)}>+</button>
                                </div>
                                <button className={styles.facultyBtn} onClick={() => { handleRagister(4) }}>Grab Now</button>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div style={{ height: '120px' }}></div>
            {/* <div className={styles.eventtext}>Events at Anwesha`24</div> */}



            <div className={styles.merchContainer}>

                <div className={styles.card}>
                    <div className={styles.text1} style={josefinSans.style}>
                        Cultural Night
                    </div>
                    <div className={styles.text2}>Anwesha's Cultural Night, Virasat'24, by SPIC MACAY, is a vibrant showcase of Indian culture. With mesmerizing Qawwali melodies and energetic Purulia Chhau dance, it celebrates India's rich cultural tapestry. Accomplished artists and rising talents promise an unforgettable evening of rhythmic beats and graceful movements.</div>

                    {/* <motion.div

                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfMANDdV-NDi7P5-j3RzGEWJYDC1xlTLg-KvnLuGfd1ygG5rg/viewform" style={{ textDecoration: 'none' }}>
                            <button

                                className={styles.merchBookBtn}
                            >
                                Grab Now
                            </button>
                        </Link>
                    </motion.div>

                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfMANDdV-NDi7P5-j3RzGEWJYDC1xlTLg-KvnLuGfd1ygG5rg/viewform" className={styles.mobileBuyNow}>
                        <button


                            className={styles.merchBookBtn2}
                        >
                            Grab Now
                        </button>
                    </Link> */}
                </div>
                <Image
                    src="/pronite/virasat.png"
                    alt="merch"
                    height={874}
                    width={1019}
                    className={styles.merchimg}
                />
            </div>



            <div className={styles.merchContainer}>
                <Image
                    src="/pronite/edm.png"
                    alt="merch"
                    height={874}
                    width={1019}
                    className={styles.merchimg}
                />
                <div className={styles.card}>
                    <div className={styles.text1} style={josefinSans.style}>
                        EDM Night
                    </div>
                    <div className={styles.text2}>Dive into sonic bliss at our EDM night. Let DJs weave exhilarating beats on the dance floor, creating an unforgettable experience of pulsating rhythms. Join us for an immersive night of electronic enchantment with vibrant lights, energetic beats, and contagious energy.</div>


                </div>

            </div>



            <div className={styles.merchContainer}>

                <div className={styles.card}>
                    <div className={styles.text1} style={josefinSans.style}>
                        Bollywood Night
                    </div>
                    <div className={styles.text2}>IIT Patna's Anwesha brings back the dazzling Bollywood night, Pronite! Featuring the musical maestro behind hits like "Badtameez Dil" and "Pashmina," this event follows the legacy of Sanam Band and KK. Join us for a night of vibrant melodies, pulsating beats, and Bollywood magic as Pronite 2024 lights up the town under the disco ball!</div>


                </div>
                <Image
                    src="/pronite/amit.png"
                    alt="merch"
                    height={883}
                    width={1019}
                    className={styles.merchimg}
                />
            </div>



            <div className={styles.merchContainer}>
                <Image
                    src="/pronite/carnivarl.png"
                    alt="merch"
                    height={883}
                    width={1019}
                    className={styles.merchimg}
                />
                <div className={styles.card}>
                    <div className={styles.text1} style={josefinSans.style}>
                        Carnival Zone
                    </div>
                    <div className={styles.text2}>Welcome to the heart-pounding excitement of the Carnival Zone at Anwesha24, where a symphony of laughter and adrenaline-filled moments awaits you! Feel the rush of the wind as you soar through the sky on thrilling amusement rides, each twist and turn adding to the excitement. Challenge your skills at our variety of thrill games that will test your aim, precision, and courage. Amidst the excitement, take a sweet pause at our delightful stalls offering a myriad of candies and treats – a sugary haven for those with a sweet tooth. This carnival zone is a sensory delight, combining the thrill of rides, the challenge of games, and the sweetness of indulgent treats, creating an unforgettable experience for all thrill-seekers and candy enthusiasts alike!</div>


                </div>

            </div>

        </div>
    )
}
export default Pronite
