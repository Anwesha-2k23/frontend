import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'
import DisplayRiveSAC from '../components/Rive/DisplayRiveSAC'
import DisplayRiveGymkhana from '../components/Rive/DisplayRiveGymkhana'
import DisplayRiveEvent from '../components/Rive/DisplayRiveEvent'
import EliteTicket from '../components/Rive/EliteTicket' 

const index = () => {
    return (
        <>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            {/*Hero section*/}
            <div className={styles.parentcontainer}>
                <div className={styles.container}>
                    <DisplayRiveAnwesha />
                    <Link href="/userRegister">
                        <DisplayRiveAdmin />
                    </Link>
                    <DisplayRiveSAC />
                    <DisplayRiveGymkhana />
                    <Image
                        src="/home/Lecture_hall_island.png"
                        alt="Lecture hall island"
                        width={141}
                        height={144}
                        className={styles.lecturehall}
                    />
                </div>
            </div>

            {/*Blend home section with other sections*/}
            <div className={styles.blendHomeSection}></div>
            
            {/*Steps section*/}
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'}}><div className={styles.steps}></div></div>
            {/*End Steps section*/}

            {/*ticket section*/}
            <div className={styles.ticketContainer}>
                <div className={styles.ticketDetails}>
                    <span style={{fontSize: 24, textAlign: 'center'}}>Get your Early Bird</span>
                    <span style={{fontSize: 36, fontWeight: 'bold', textAlign: 'center'}}>free entry passes</span>
                </div>
                <div className={styles.ticketImages}>
                    <Link href="https://pmny.in/mJs3IkpvufoA" target="_blank"><EliteTicket/></Link>
                    <Link href="https://pmny.in/LrfJCrtUy8S4" target="_blank"><Image src="/home/pro-card.png" width={277} height={440} alt="Pro ticket" /></Link>
                </div>
            </div>
            {/*end ticket section*/}

            {/* Merchandise Section */}
            <div className={styles.themeSection}>
                <div className={styles.merchContainer}>
                    <div className={styles.merchDetails}>
                        <Image
                            className={styles.tshirtImage}
                            src="/home/tshirts.svg"
                            alt="Tshirts"
                            width={600}
                            height={580}
                        />
                    </div>
                    <div className={styles.merchBooking}>
                        {/* <img
                            src="/home/grab_merc_text.png"
                            alt="Grab the merch"
                        /> */}
                        <span className={styles.grabMerchText}>Grab Your <br /> Merchandise!</span>
                        {/* TODO : Add the link for the payment of the TShirts */}
                        <a href="https://pmny.in/YJ78Zv4cSA0l">
                            <button href="https://pmny.in/YJ78Zv4cSA0l" className={styles.merchBookBtn}>
                                Buy 1
                            </button>
                        </a>
                        <a href="https://pmny.in/MIIjccwJBC3K">
                            <button href="https://pmny.in/MIIjccwJBC3K" className={styles.merchBookBtn}>
                                Buy 2
                            </button>
                        </a>                        
                        <a href="https://pmny.in/erg5mzOjA6Oc">
                            <button href="https://pmny.in/erg5mzOjA6Oc" className={styles.merchBookBtn}>
                                Buy 3
                            </button>
                        </a>
                    </div>
                    {/* TODO : Add the link for the payment of the TShirts */}
                    <a href="https://pmny.in/YJ78Zv4cSA0l" className={styles.mobileBuyNow}>
                        <button href="https://pmny.in/YJ78Zv4cSA0l" className={styles.merchBookBtn2}>
                            Buy 1
                        </button>
                    </a>
                    <a href="https://pmny.in/MIIjccwJBC3K" className={styles.mobileBuyNow}>
                        <button href="https://pmny.in/MIIjccwJBC3K" className={styles.merchBookBtn2}>
                            Buy 2
                        </button>
                    </a>
                    <a href="https://pmny.in/erg5mzOjA6Oc" className={styles.mobileBuyNow}>
                        <button href="https://pmny.in/erg5mzOjA6Oc" className={styles.merchBookBtn2}>
                            Buy 3
                        </button>
                    </a>
                </div>
            </div>
            {/* end Merchandise Section */}

            {/*Events section*/}
            <div className={styles.eventSection}>
                <div className={styles.eventSectionContainer}>
                    <Image
                        src="/home/events_island.svg"
                        width={535}
                        height={395}
                        alt="Events section"
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '600px',
                            position: 'relative',
                            boxShadow: '#000000 7px 7px 0px',
                            marginBottom: '10px',
                            borderRadius: '15px',
                            marginInline: '15px',
                        }}
                    >
                        {/* <img
                            src="/home/events.svg"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                            style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}
                        /> */}
                        <DisplayRiveEvent />

                        <div className={styles.eventSectionText}>
                            Anwesha, the Annual Cultural-Management Fest of IIT
                            Patna, is grandeur host of magnificent and thrilling
                            events. We have everything starting from our legacy
                            events including Syngphony, Heelturn to our most
                            exhilarating title event, Mr/Ms Anwesha. We have
                            Verve, the fashion walk event, stretching our
                            platform for all the fashion influencers. We bring
                            you many unconventional events like StepUp, Graffiti
                            Workshop, Imagination Station and monochrome as well
                            as a first of its kind AnimeCon, an evening full of
                            anime for all anime lovers out there, Anwesha have
                            got you’ll covered. Just enter the arena and explore
                            every isles you’ve ever imagined about. Make sure
                            you create your Anwesha ID and swim into the pool of
                            events, check out the rulebooks and feel free to
                            contact the organizers for all doubts/queries.
                            <br />
                            <br />
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <button className={styles.homebtn}>
                                    <Link
                                        href="/events"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        Explore More
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End events section*/}

            {/*Theme section*/}
            <div className={styles.themeSection}>
                <div className={styles.themeSectionContainer}>
                    <Image
                        src="/home/theme.svg"
                        width={535}
                        height={395}
                        alt="Events section"
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '600px',
                            position: 'relative',
                            boxShadow: '#000000 7px 7px 0px',
                            marginBottom: '10px',
                            borderRadius: '15px',
                            marginInline: '15px',
                        }}
                    >
                        <img
                            src="/home/themeposter.svg"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                            style={{
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px',
                            }}
                        />

                        <div className={styles.themeSectionText}>
                            Step into a world where dreams come true and
                            possibilities are endless. The Isles of Utopia
                            await, where every individual is free to thrive and
                            prosper, and the pursuit of happiness is a shared
                            goal. It's a world where compassion and empathy
                            reign, and social justice is the foundation of
                            society. Come explore the idyllic landscapes, bask
                            in the warm glow of the sun, and feel the gentle
                            breeze on your face. The Isles of Utopia offer a
                            glimpse of a better world, a world where anything is
                            possible, and everyone is welcome
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            {/*End theme section*/}

            {/*Theme video goes here*/}

            {/*About us section*/}
            <div className={styles.eventSection}>
                <div className={styles.eventSectionContainer}>
                    <Image
                        src="/home/aboutus.svg"
                        width={535}
                        height={395}
                        alt="Events section"
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '600px',
                            position: 'relative',
                            boxShadow: '#000000 7px 7px 0px',
                            marginBottom: '10px',
                            borderRadius: '15px',
                            marginInline: '15px',
                        }}
                    >
                        <img
                            src="/home/aboutus_poster.png"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                            style={{
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px',
                            }}
                        />
                        <div className={styles.eventSectionText}>
                            Anwesha 2023 is envisioned to be an innovative and
                            cultural uplifting festival of togetherness in not
                            just the state or region, but the whole nation. We
                            have reimagined the lens through which we understand
                            culture and celebration, deriving the cornerstones
                            for this year's edition that shall drive forward our
                            festival. <br />
                            <br />
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <button className={styles.homebtn}>
                                    <Link
                                        href="/aboutus"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        Know More
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End about us section*/}

            {/*Team section*/}
            <div className={styles.themeSection}>
                <div className={styles.themeSectionContainer}>
                    <Image
                        src="/home/teams_island.svg"
                        width={535}
                        height={395}
                        alt="Events section"
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: '600px',
                            position: 'relative',
                            boxShadow: '#000000 7px 7px 0px',
                            marginBottom: '10px',
                            borderRadius: '15px',
                            marginInline: '15px',
                        }}
                    >
                        <img
                            src="/home/team.svg"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                            style={{
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px',
                            }}
                        />

                        <div className={styles.themeSectionText}>
                            The grandeur of Anwesha is something that requires a
                            powerful community to come together alongwith their
                            thrilling ideas and dedicated promises. The Anwesha
                            community comprises of seven different committees
                            including Events and Planning, Media, Public and
                            Relations, Hospitality, Registration, Security and
                            Planning, Creatives and Design, Web and App
                            Development and Sponorship committee. It takes a
                            whole year of these dedicated committee members to
                            pull off Anwesha on a bigger scale ever imagined by
                            our guests and participants.
                            <br />
                            <br />
                            <div style={{ textAlign: 'center', color: '#fff' }}>
                                <button className={styles.homebtn} disabled>
                                    <Link
                                        href="#"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Coming Soon...
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End team section*/}


            <div style={{ height: '101px' }}></div>
        </>
    )
}

export default index
