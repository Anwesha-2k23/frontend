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
                    <div className={styles.eventSectionText}>
                        Lorem ipsum dolor sit amet consectetur. Nisl consectetur
                        vel mi massa non dictum sociis. Quis condimentum nisl
                        quisque consectetur sed egestas augue diam. Commodo
                        egestas sit risus amet egestas ac. Adipiscing dapibus
                        feugiat diam sit varius. Quisque hac sollicitudin in
                        enim amet. Eget semper faucibus purus adipiscing mattis.
                        Pharetra morbi diam vivamus sed pretium turpis. Magna
                        interdum lectus vel aliquam magna lacus facilisis. Magna
                        etiam integer diam aliquet nisl imperdiet quis lorem
                        non. Tincidunt sit turpis ac lectus et sed orci eu
                        venenatis. Neque blandit donec urna aliquet ipsum
                        feugiat eu montes viverra. Leo diam accumsan vitae
                        natoque.
                        <br />
                        <br />
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button
                                className={styles.homebtn}
                                style={{ alignSelf: 'right' }}
                            >
                                <Link
                                    href="/events"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#000',
                                    }}
                                >
                                    Explore More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Theme section*/}
            <div className={styles.themeSection}>
                <div className={styles.themeSectionContainer}>
                    <Image
                        src="/home/theme.svg"
                        width={535}
                        height={395}
                        alt="Events section"
                    />
                    <div className={styles.themeSectionText}>
                        <h2>Isles Of Utopia</h2>
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Nisl consectetur
                        vel mi massa non dictum sociis. Quis condimentum nisl
                        quisque consectetur sed egestas augue diam. Commodo
                        egestas sit risus amet egestas ac. Adipiscing dapibus
                        feugiat diam sit varius. Quisque hac sollicitudin in
                        enim amet. Eget semper faucibus purus adipiscing mattis.
                        Pharetra morbi diam vivamus sed pretium turpis. Magna
                        interdum lectus vel aliquam magna lacus facilisis. Magna
                        etiam integer diam aliquet nisl imperdiet quis lorem
                        non. Tincidunt sit turpis ac lectus et sed orci eu
                        venenatis. Neque blandit donec urna aliquet ipsum
                        feugiat eu montes viverra. Leo diam accumsan vitae
                        natoque.
                        <br />
                        <br />
                        <button className={styles.homebtn}>Theme Video</button>
                    </div>
                </div>
            </div>

            <div style={{ height: '101px' }}></div>
        </>
    )
}

export default index
