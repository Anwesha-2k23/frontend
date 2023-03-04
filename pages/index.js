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
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        <img
                            src="/home/events.svg"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                        />
                        <div className={styles.eventSectionText}>
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
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <button className={styles.homebtn}>
                                    <Link
                                        href="/events"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#fff',
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
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        <img
                            src="/home/themeposter.svg"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
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
                            <div style={{ textAlign: 'center', color: '#fff' }}>
                                <button className={styles.homebtn}>
                                    <Link href="#" style={{ color: '#fff' }}>
                                        Theme Video
                                    </Link>
                                </button>
                            </div>
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
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                        }}
                    >
                        <img
                            src="/home/aboutus_poster.png"
                            layout="fill"
                            width="100%"
                            objectFit="contain"
                            alt="Events image"
                        />
                        <div className={styles.eventSectionText}>
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
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <button className={styles.homebtn}>
                                    <Link
                                        href="/events"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#fff',
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

            <div style={{ height: '101px' }}></div>
        </>
    )
}

export default index
