import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Josefin_Sans } from '@next/font/google'
import HomeBackgroundAnimation from '../components/Rive/homeBackgrounAnim'
import styles from '../styles/homepage.module.css'
import DisplayRiveAnwesha from '../components/Rive/DisplayRiveAnwesha'
import DisplayRiveAdmin from '../components/Rive/DisplayRiveAdmin'
import DisplayRiveSAC from '../components/Rive/DisplayRiveSAC'
import DisplayRiveGymkhana from '../components/Rive/DisplayRiveGymkhana'
import DisplayRiveEvent from '../components/Rive/DisplayRiveEvent'
import EliteTicket from '../components/Rive/EliteTicket'
import ProTicket from '../components/Rive/ProTicket'
import RegisterButton from '../components/Rive/RegisterButton'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { motion } from 'framer-motion'

const josefinSans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const index = () => {
    return (
        <>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div className={styles.bg}>
                {/*Hero section*/}
                <div className={styles.parentcontainer}>
                    {/* <div className={styles.container}>
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
                    </div> */}
                    <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            src="/home/logo.png"
                            alt="logo"
                            height={400}
                            width={1029.92}
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.regdiv} >
                        {/* <RegisterButton /> */}
                        <Link style={{width: '30%', minWidth: '300px'}} href="/userRegister" >
                                
                                {/* <RegisterButton /> */}
                            </Link>
                        {/* <motion.div

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        ><Link className={styles.reglink} href="/userRegister" >
                                <div className={styles.regfont}>
                                    Register Now
                                </div>
                                <RegisterButton />
                            </Link>
                        </motion.div> */}
                    </div>

                </div>

                {/*Blend home section with other sections*/}
                {/* <div className={styles.blendHomeSection}></div> */}

                {/*Steps section*/}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '100px',
                        marginTop: '120px',
                    }}
                >
                    <div className={styles.steps}></div>
                </div>
                {/*End Steps section*/}

                {/*ticket section*/}
                {/* <div
                    className={styles.ticketContainer}
                    style={{ overflow: 'hidden' }}
                >
                    <ProTicket />
                </div> */}
                {/* <Carousel
                        style={{ position: 'absolute' }}
                        showStatus={false}
                        showThumbs={false}
                        swipeable={false}
                        // showIndicators={true}
                        showArrows={true}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3500}
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
                                    Get your
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
                                    href=""
                                // target="_blank"
                                >
                                    <EliteTicket />
                                </Link>
                                <Link
                                    href=""
                                // target="_blank"
                                >
                                    <ProTicket />
                                </Link>
                            </div>
                        </div> */}
                {/* <div className={styles.artistPoster}>
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
                        {/* <img
                            className={styles.artistImg}
                            src="/home/trap.png"
                            alt="Trap Image"
                        />
                        <img
                            className={styles.artistImgMob}
                            src="/home/trap_vertical.png"
                            alt="Trap Image"
                        /> */}
                {/* </div> */}
                {/* </Carousel > */}
                {/* </div > */}
                {/*end ticket section*/}

                {/* Ticket Section */}
                <div className={styles.themeSection}>
                    {/* <div className={styles.merchContainer}>
                        <Link href="/registration">
                            <ProTicket />
                        </Link>
                        <div className={styles.card}>
                            <div className={styles.text1} style={josefinSans.style}>
                                Anwesha Fest Passes
                            </div>
                            <div className={styles.text2}>Step into the epitome of musical extravagance at Anwesha's gala event. Previous years witnessed the magic of KK and Sanam, and this year, anticipation soars as the iconic Amit Trivedi graces the stage.</div>
                            <div className={styles.text2}>With dynamic lights, resounding melodies, and an unparalleled atmosphere, the night promises a glamorous, amazing, and unforgettable experience. Anwesha's signature event is set to be the zenith of cultural celebration, featuring the brilliance of Amit Trivedi in a performance that will leave an indelible mark on the tapestry of our festivities.</div>
                            <div style={{ marginTop: '24px' }}></div>
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                            >
                            </motion.div>
                        </div>
                    </div> */}

                    <div className={styles.merchContainer}>

                        <div className={styles.card}>
                            <div className={styles.text1} style={josefinSans.style}>
                                Official Anwesha Merch
                            </div>
                            <div className={styles.text2}>Get ready to immerse yourselves in the allure of aesthetics as we unveil the exclusive T-shirt and Hoodie collection for Anwesha'24!</div>
                            <div className={styles.text2}>The designs are a fusion of elegance and innovation, capturing the true spirit of Anwesha. T-shirts are made of supreme quality with GSM 200 and 100% cotton, ensuring maximum comfort and durability. Hoodies are made from Premium Quality Woven Cotton with 350+ GSM cloth.</div>
                            <div className={styles.text2}>
                                Elevate your style with our limited-edition Anwesha T-shirts and Hoodies. </div>
                            <div style={{ marginTop: '24px' }}></div>
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfMANDdV-NDi7P5-j3RzGEWJYDC1xlTLg-KvnLuGfd1ygG5rg/viewform" style={{ textDecoration: 'none' }}>
                                    {/* <button

                                        className={styles.merchBookBtn}
                                    >
                                        Grab Now
                                    </button> */}
                                </Link>
                            </motion.div>

                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfMANDdV-NDi7P5-j3RzGEWJYDC1xlTLg-KvnLuGfd1ygG5rg/viewform" className={styles.mobileBuyNow}>
                                <button


                                    className={styles.merchBookBtn2}
                                >
                                    Grab Now
                                </button>
                            </Link>
                        </div>
                        <Image
                            src="/merch/merch.svg"
                            alt="merch"
                            height={614}
                            width={679}
                            className={styles.merchimg}
                        />
                    </div>





                    <div className={styles.merchContainer}>
                        <Image
                            src="/home/events2.png"
                            alt="events"
                            height={612}
                            width={666}
                            className={styles.merchimg}
                        />
                        <div className={styles.card}>
                            <div className={styles.text1} style={josefinSans.style}>
                                Events at Anwesha’24
                            </div>
                            <div className={styles.text2}>From heart-stopping dance battles and soulful singing competitions to the dazzling glamour of the fashion show, with thought-provoking Nukkad Nataks and the lyrical echoes of poetry slams, Anwesha's events ignite every artistic spark. Come, delve into Anwesha's events, where every beat has a story to tell and every expression finds a stage!</div>
                            <div className={styles.text2}>   what are you waiting for? Get your Anwesha ID ready, and get ready to jump into the pool of events. If you have any doubts or queries, just hit up the organizers, and they'll help you faster than a pizza delivery guy. Let's get this party started!!</div>
                            <div style={{ marginTop: '24px' }}></div>
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Link href="/events" style={{ textDecoration: 'none' }}>
                                    <button

                                        className={styles.merchBookBtn}
                                    >
                                        Explore Now
                                    </button>
                                </Link>
                            </motion.div>

                            <Link href="events" className={styles.mobileBuyNow}>
                                <button


                                    className={styles.merchBookBtn2}
                                >
                                    Explore Now
                                </button>
                            </Link>
                        </div>
                    </div>




                    <div className={styles.merchContainer}>

                        <div className={styles.card}>
                            <div className={styles.text1} style={josefinSans.style}>
                                Mirage Of Aesthete
                            </div>
                            <div className={styles.text2}>Unveiling a symphony of beauty and illusion, this ethereal experience transcends the ordinary, inviting you to explore the captivating landscapes of creativity. Join us on this mesmerizing journey where the boundaries of imagination blur, and the soul is set free to embrace the magic of this unveiled mirage!</div>
                            <div style={{ marginTop: '24px' }}></div>
                            <motion.div

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Link href="/aboutus" style={{ textDecoration: 'none' }}>
                                    <button

                                        className={styles.merchBookBtn}
                                    >
                                        Explore Now
                                    </button>
                                </Link>
                            </motion.div>

                            <Link href="/aboutus" className={styles.mobileBuyNow}>
                                <button


                                    className={styles.merchBookBtn2}
                                >
                                    Explore Now
                                </button>
                            </Link>
                        </div>
                        <Image
                            src="/home/mirage.png"
                            alt="events"
                            height={633}
                            width={832}
                            className={styles.merchimg}
                        />
                    </div>
                </div>
                {/* end Merchandise Section */}

                {/*Events section*/}
                {/* <div className={styles.eventSection}>
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
                {/* <div className={styles.themeSection}>
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
                {/* <div className={styles.eventSection}>
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
                        > */}
                {/* <img
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
                                Anwesha 2024 is envisioned to be an innovative and
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
                {/* <div className={styles.themeSection}>
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
                {/* </div>
                        </div>
                    </div>
                </div> */}
                {/* End team section   */}

            </div>
        </>
    )
}

export default index
