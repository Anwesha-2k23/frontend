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
import ProTicket from '../components/Rive/ProTicket'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

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
                        style={{ overflow: 'hidden' }}
                    />
                </div>
            </div>

            {/*Blend home section with other sections*/}
            <div className={styles.blendHomeSection}></div>

            {/*Steps section*/}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '100px',
                    marginTop: '100px',
                }}
            >
                <div className={styles.steps}></div>
            </div>
            {/*End Steps section*/}

            {/*ticket section*/}
            <div
                className={styles.ticketContainer}
                style={{ overflow: 'hidden' }}
            >
                <Carousel
                    style={{ position: 'absolute' }}
                    showStatus={false}
                    showThumbs={false}
                    swipeable={false}
                    // showIndicators={true}
                    showArrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={1000}
                    dynamicHeight={true}
                    // centerMode={true}
                    emulateTouch={true}
                    useKeyboardArrows={true}
                    // autoFocus={true}
                    renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                            <div
                                className={styles.carouselArrowDivLeft}
                                onClick={clickHandler}
                                style={{
                                    top: '50%',
                                    position: 'absolute',
                                    left: '20%',
                                    zIndex: 5,
                                    cursor: 'pointer',
                                    display: hasPrev ? 'block' : 'none',
                                }}
                            >
                                {/* <LeftIcon className="w-9 h-9 text-white" /> */}
                                <Image
                                    height={60}
                                    width={60}
                                    src="/home/left_arrow.svg"
                                    alt="left arrow"
                                    className={styles.carouselArrow}
                                />
                            </div>
                        )
                    }}
                    renderArrowNext={(clickHandler, hasNext) => {
                        return (
                            <div
                                className={styles.carouselArrowDivRight}
                                onClick={clickHandler}
                                style={{
                                    top: '50%',
                                    position: 'absolute',
                                    right: '20%',
                                    cursor: 'pointer',
                                    display: hasNext ? 'block' : 'none',
                                }}
                            >
                                {/* <LeftIcon className="w-9 h-9 text-white" /> */}
                                <Image
                                    height={60}
                                    width={60}
                                    src="/home/right_arrow.svg"
                                    alt="right arrow"
                                    className={styles.carouselArrow}
                                />
                            </div>
                        )
                    }}
                >
                    <div style={{ display: 'inline-table' }}>
                        <div className={styles.ticketDetails}>
                            <span style={{ fontSize: 24, textAlign: 'center' }}>
                                Get your Early Bird
                            </span>
                            <span
                                style={{
                                    fontSize: 36,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                Fest Entry Passes
                            </span>
                        </div>
                        <div className={styles.ticketImages}>
                            <Link
                                href="https://pmny.in/mJs3IkpvufoA"
                                target="_blank"
                            >
                                <EliteTicket />
                            </Link>
                            <Link
                                href="https://pmny.in/LrfJCrtUy8S4"
                                target="_blank"
                            >
                                <ProTicket />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.artistPoster}>
                        <img
                            className={styles.artistImg}
                            src="/home/sanam.png"
                            alt="Sanam Image"
                        />
                        <img
                            className={styles.artistImgMob}
                            src="/home/sanam_vertical.png"
                            alt="Sanam Image"
                        />
                    </div>
                    <div className={styles.artistPoster}>
                        <img
                            className={styles.artistImg}
                            src="/home/trap.png"
                            alt="Trap Image"
                        />
                        <img
                            className={styles.artistImgMob}
                            src="/home/trap_vertical.png"
                            alt="Trap Image"
                        />
                    </div>
                </Carousel>
            </div>
            {/*end ticket section*/}

            {/* Merchandise Section */}
            <div className={styles.themeSection}>
                <div className={styles.merchContainer}>
                    <div className={styles.merchDetails}>
                        {/* <Image
                            className={styles.tshirtImage}
                            src="/merch/tshirt_with_bg.png"
                            alt="Tshirts"
                            width={600}
                            height={580}
                        /> */}
                    </div>
                    <div className={styles.merchBooking}>
                        {/* <img
                            src="/home/grab_merc_text.png"
                            alt="Grab the merch"
                        /> */}
                        <span className={styles.grabMerchText}>
                            Grab Your <br /> Merchandise!
                        </span>
                        {/* TODO : Add the link for the payment of the TShirts */}
                        <Link href="/merchandise">
                            <button
                                href="/merchandise"
                                className={styles.merchBookBtn}
                            >
                                Buy Now
                            </button>
                        </Link>
                        {/* <a href="https://pmny.in/MIIjccwJBC3K">
                            <button
                                href="https://pmny.in/MIIjccwJBC3K"
                                className={styles.merchBookBtn}
                            >
                                Buy 2
                            </button>
                        </a>
                        <a href="https://pmny.in/erg5mzOjA6Oc">
                            <button
                                href="https://pmny.in/erg5mzOjA6Oc"
                                className={styles.merchBookBtn}
                            >
                                Buy 3
                            </button>
                        </a> */}
                    </div>
                    {/* TODO : Add the link for the payment of the TShirts */}

                    <Link href="./merchandise" className={styles.mobileBuyNow}>
                        <button
                            href="/merchandise"
                            className={styles.merchBookBtn2}
                        >
                            Buy Now
                        </button>
                    </Link>
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
                        style={{ overflow: 'hidden' }}
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
                            Get ready to witness the ultimate showdown of
                            culture and management as Anwesha, the annual fest
                            of IIT Patna, is coming in hot! With events ranging
                            from{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                Syngphony
                            </span>{' '}
                            to{' '}
                            <span style={{ fontWeight: 'bold' }}>Heelturn</span>
                            , we've got more action than a Bollywood movie. And
                            let's not forget about{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                Mr/Ms Anwesha
                            </span>
                            , where the competition is hotter than a samosa
                            fresh out of the fryer. <br />
                            If you're a fashionista, then{' '}
                            <span style={{ fontWeight: 'bold' }}>Verve</span> is
                            the place to be. It's a fashion walk event that'll
                            make you feel like you're on the ramp, even if your
                            walk is more like a waddle. And for all you
                            unconventional folks out there, we've got{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                StepUp, Graffiti Workshop, Imagination Station,
                            </span>{' '}
                            and{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                Monochrome
                            </span>
                            . Trust us, it's more fun than playing hopscotch in
                            a sandpit.
                            <br />
                            But wait, there's more!{' '}
                            <span style={{ fontWeight: 'bold' }}>
                                AnimeCon
                            </span>{' '}
                            is also making its debut this year, and it's going
                            to be a treat for all you anime lovers out there. We
                            promise to take you on a journey that's more epic
                            than Goku's battles with Frieza.
                            <br />
                            So, what are you waiting for? Get your Anwesha ID
                            ready, and get ready to jump into the pool of
                            events. If you have any doubts or queries, just hit
                            up the organizers, and they'll help you faster than
                            a pizza delivery guy. Let's get this party started!
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
                        style={{ overflow: 'hidden' }}
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
                        style={{ overflow: 'hidden' }}
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
                        style={{ overflow: 'hidden' }}
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
                            {/* <div style={{ textAlign: 'center', color: '#fff' }}>
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
                            </div> */}
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
