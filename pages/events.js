import styles from '../styles/events.module.css'
import { Josefin_Sans, Montserrat } from '@next/font/google'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/EventItem/index.js'
import { useNavigate } from 'react-router-dom';
// import Modal from '../components/EventItem/Modal.js'
import EventItem from '../components/EventItem'
import eventsDetails from '../public/events/events_data.json' assert { type: 'json' };
import Modal from '../components/BigModal/index.js'



const workshopcardarr = [{
    "Event Name": "techgyan x Anwesha",
    "poster": '/events/workshopPoster.jpeg',
    "Event": "2 days of workshop",
}]

const SponsorsSlider = ({ images, animation_duration = -1 }) => {
    const width = 127.381; // IF YOU CHANGE THIS THEN CHANGE IT INSIDE autoScrollSponseAnimation ALSO
    const heigth = 127.381;
    const duration = animation_duration <= 0 ? Math.floor(10 * (images.length / 7)) : animation_duration;

    const gap = 16;
    return <div style={{
        position: "relative",
        backgroundColor: "inherit",
        // minWidth: width * (images.length + 1),
        minWidth: (width + gap) * images.length,
        height: heigth
    }}>
        {
            images.map((src, index) =>
                <div key={index} className={styles.autoScrollSponseAnimation} style={{
                    width: "100%",
                    position: "absolute",
                    left: "100%",
                    // zIndex: 8,
                    animationDelay: `${(duration / images.length) * index}s`,
                    animationDuration: `${duration}s`,
                    '--width': width
                }}>
                    <Image src={src} width={width} height={heigth} />
                </div>
            )
        }
    </div>
}

const Events = () => {
    const [fadeOut, setFadeOut] = useState(false)

    // Handling fade-out effect on scroll   
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setFadeOut(scrollPosition > window.innerHeight / 4)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleWorkshopNavigation = () => {
        window.location.href = "https://tech-gyan.in/workshop-iit-patna-checkout/";
    };


    let exceludedEvents = [
    ]

    const sponsorImages = [
        'https://drive.google.com/uc?export=view&id=1sk_dXvHZCLN5QGH8x5ae4vjunza7kdwo', // 'Allen Cooper'
        'https://drive.google.com/uc?export=view&id=1sO3UC-XMYPAggeQ_P3loZCSxjbXKiTzk', // 'Bihar Tourism'
        'https://drive.google.com/uc?export=view&id=1NzTZh6D-THmqConUzrZ2tvC3PaJU3Ets', // 'Biryani'
        'https://drive.google.com/uc?export=view&id=10JmGTjBV_wliW6EoE4ozwnErEHNWZlGe', // 'Boult'
        'https://drive.google.com/uc?export=view&id=1sD17yO4Zwm449d9ilTh9cPRoTeUd4tpy', // 'Bihar Rajya Pul Nirman Nigam'
        'https://drive.google.com/uc?export=view&id=1yCcmexPef2xI3lQXo7wJAzliDEyUIxh-', // 'Bihar State Aids Control Society'
        'https://drive.google.com/uc?export=view&id=1QZLHYPSJsMLQUKssih7HPqU5DwMGkcnc', // 'Bihar State Electronics Development Corporation'
        'https://drive.google.com/uc?export=view&id=1UBiVYAM7HGv-tjMiyTofA7_ZCWS959MG', // 'Bihar Council on Science and Technology'
        'https://drive.google.com/uc?export=view&id=1gg9J_on8QTdBs64u7TVwpwkc45ydw4Eq', // 'Department of Information Technology'
        'https://drive.google.com/uc?export=view&id=1FOtkwzHkA74tK7uMzHYaxSbz8W-N40EN', // 'Department of Industries'
        'https://drive.google.com/uc?export=view&id=1EKapSE6Q9xbDmycY0XecwCEHKjxUqZzO', // 'Dominos'
        'https://drive.google.com/uc?export=view&id=1_LI78ee0KbgufhKeFSNQJSK7DzqG6T6q', // 'Fueling'
        'https://drive.google.com/uc?export=view&id=1NXlcqgtvPwuaGzr0KxNWWaIGvNgUWDax', // 'Hydration'
        'https://drive.google.com/uc?export=view&id=1Ge6eJMxha0lNxzF8AXW-aT8fP11FXJHA', // 'Kala Akchar'
        'https://drive.google.com/uc?export=view&id=1lvnREbJ84WauvAhwBCrtO7P11HO-HUz9', // 'NHAI'
        'https://drive.google.com/uc?export=view&id=13oaVnvbhSXcAZTTajdcwXVJ-4YjGtRBu', // 'NTPC'
        'https://drive.google.com/uc?export=view&id=12n_N2f4FyomvBlLOELPnGhLjgPdzCfkb', // 'Red FM'
        'https://drive.google.com/uc?export=view&id=13M6yySVuABxMP7pus6Hy2HVbianRpSnA', // 'Road Chef'
        'https://drive.google.com/uc?export=view&id=1MLfxr5ipb_m3VUkNCiAB3sc00hxz5fi-', // 'State Bank of India'
        'https://drive.google.com/uc?export=view&id=1Vbu1tCEMNPzoeOqpydOcOSxHlPzVz3up', // 'Startup Bihar'
        'https://drive.google.com/uc?export=view&id=1AA3qGrGqqTbmfo2DAWmkAWXs8KWTDC07', // 'The Community Events'
        'https://drive.google.com/uc?export=view&id=1Ub5Ntbu30Kp-1dpYSeB0M_QtbjGsiVpI', // 'Times of India'
        'https://drive.google.com/uc?export=view&id=1mX_WeCIywRV838QPn8AywiEWTSXSzMbM', // 'Waffcha'
        'https://drive.google.com/uc?export=view&id=183hiDaFhULaFvHURLFMCWBPmT7RjMRWI', // 'Wat A Burger'
    ];


    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]); // Manages the filtered events
    useEffect(() => {
        let host = process.env.NEXT_PUBLIC_HOST

        async function callAPI() {
            try {
                const res = await fetch(`${host}/event/allevents`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await res.json()
                let result = data.filter((event) => {
                    if (exceludedEvents.includes(event.id)) {
                        return false
                    }
                    return true
                })
                setEvents(result)
                setFilteredEvents(result)
            } catch (e) {
                console.log('Failed to fetch')
            }
        }
        callAPI()
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredEvents(
            events.filter((event) =>
                event.name.toLowerCase().includes(query)
            )
        );
    };


    const openModal = (event) => {
        console.log('Modal opened for event:', event)
        setSelectedEvent(event)
        setIsModalOpen(true)
    }


    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedEvent(null)
    }
    return (
        <div className={styles.mainContainer}>
            <Head>
                <title>Events - Anwesha 2024</title>
                <meta name="description" content="Events-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>

            <div className={styles.container}>
                <div className={styles.textLinkContainer}>
                    <a href="https://drive.google.com/file/d/13W7BuZjPRJdQPMkST3cp49r-L3qA3nZ-/view?usp=drivesdk" className={styles.textLink} target="_blank">
                    How to register for Events</a>
                </div>
                <div className={styles.titleBox}>
                    <div className={styles.centergroup}>
                        <img src="/events/center_material.svg" alt="" />
                    </div>
                    <div className={styles.titletext}>EXPLORE THE EVENTS</div>
                </div>
                <div className={`${styles.searchContainer}`}>
                    <div className={styles.leftgroup}>
                        <img src="/events/left_material.svg" alt="" />
                    </div>
                    <div className={`${styles.searchbox}`}>
                        <input
                            className={styles.searchbar}
                            type="text"
                            placeholder="Search Events"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <img src="/events/search_icon.svg" alt="" />
                    </div>
                    <div className={styles.rightgroup}>
                        <img src="/events/right_material.svg" alt="" />
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    {filteredEvents.map((item, idx) => (
                        <Card
                            onClick={() => openModal(item)}
                            key={idx}
                            event={item}
                            closeHandler={closeModal}
                        />
                    ))}
                </div>
                {isModalOpen && (
                    <Modal
                        title={selectedEvent.name.split('#')[0]}
                        body={selectedEvent}
                        closeHandler={closeModal}
                    />
                )}
            </div>

            <div className={styles.workshopContainer}>
                <div className={styles.workshoptitletext}>Workshops</div>
                <div className={styles.cardContainer}>
                    {workshopcardarr.map((item, idx) => (
                        <Card
                            onClick={handleWorkshopNavigation}
                            key={idx}
                            event={item}
                        />
                    ))}
                </div>
            </div>


            {/* Sponsors */}
            <section className={styles.sponsors}>
                <div className={styles.sponsors_title}>
                    <h2>Our Proud Sponsors</h2>
                    <h3>Strengthening the Vision Together</h3>
                </div>
                <div className={styles.sponsors_images_slider}>
                    <SponsorsSlider images={sponsorImages} />
                </div>
            </section>
        </div>
    )
}
export default Events
