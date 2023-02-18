import styles from '../styles/events.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import EventItem from '../components/EventItem'

const arr = [
    {
        id: 'EV002',
        name: 'International Music Festival',
        organizer: 'Music and Arts Society',
        venue: 'Central Park, New York',
        start_time: '2023-06-01T12:00:00Z',
        description:
            'A gathering of musicians from all over the world to perform and showcase their talents',
        end_time: '2023-06-05T23:00:00Z',
        prize: '5,000',
        registration_fee: '100.00',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        max_team_size: 8,
        registration_deadline: '2023-05-15T23:59:00Z',
        poster: 'https://www.internationalmusicfestival.com/poster2023.jpg',
        tags: 'music, festival, performance, showcase',
        min_team_size: 4,
    },
    {
        id: 'EV003',
        name: 'World Food Expo',
        organizer: 'Food and Beverage Industry',
        venue: 'Messe Frankfurt, Germany',
        start_time: '2023-08-15T10:00:00Z',
        description:
            'An exhibition of the latest food and beverage products from around the world',
        end_time: '2023-08-19T18:00:00Z',
        prize: '1,000',
        registration_fee: '200.00',
        video: 'https://www.youtube.com/watch?v=M6U3X6UJh6U',
        max_team_size: 10,
        registration_deadline: '2023-07-31T23:59:00Z',
        poster: 'https://www.worldfoodexpo.com/poster2023.jpg',
        tags: 'food, beverage, expo, exhibition',
        min_team_size: 2,
    },
    {
        id: 'EV004',
        name: 'Global Entrepreneurship Summit',
        organizer: 'Entrepreneurship Association',
        venue: 'JW Marriott, Mumbai',
        start_time: '2023-10-01T09:00:00Z',
        description:
            'A platform for entrepreneurs to network, learn and grow their businesses',
        end_time: '2023-10-03T17:00:00Z',
        prize: '10,000',
        registration_fee: '500.00',
        video: 'https://www.youtube.com/watch?v=H1_Lh_Eo9XQ',
        max_team_size: 4,
        registration_deadline: '2023-09-15T23:59:00Z',
        poster: 'https://www.globalentrepreneurshipsummit.com/poster2023.jpg',
        tags: 'entrepreneurship, summit, business, networking',
        min_team_size: 3,
    },
    {
        id: 'EV001',
        name: 'National Science and Maths Quiz',
        organizer: 'Education Ministry',
        venue: 'University of Ghana, Legon',
        start_time: '2023-04-15T08:30:00Z',
        description:
            'Competition for senior high school students to test their knowledge in science and mathematics',
        end_time: '2023-04-17T17:00:00Z',
        prize: '10,000',
        registration_fee: '50.00',
        video: 'https://www.youtube.com/watch?v=U6bhO4lD_kk',
        max_team_size: 4,
        registration_deadline: '2023-03-25T23:59:00Z',
        poster: 'https://www.nationalsciencequiz.com/poster2023.jpg',
        tags: 'science, mathematics, quiz, competition',
        min_team_size: 2,
    },
    {
        id: 'EV000',
        name: 'Test event do not resgister',
        organizer: 'Anwesha',
        venue: 'pata nahi',
        start_time: '2023-02-09T03:20:00Z',
        description: 'Some random description',
        end_time: '2023-02-07T12:50:00Z',
        prize: '150',
        registration_fee: '1000.00',
        video: '',
        max_team_size: 9,
        registration_deadline: '2023-02-22T14:20:00Z',
        poster: '',
        tags: '2',
        min_team_size: 2,
    },
    {
        id: 'EV005',
        name: 'National Sports Championship',
        organizer: 'Sports Council',
        venue: 'Stadium Australia, Sydney',
        start_time: '2023-12-01T09:00:00Z',
        description:
            'An annual championship featuring various sports competitions',
        end_time: '2023-12-05T17:00:00Z',
        prize: '25,000',
        registration_fee: '50.00',
        video: 'https://www.youtube.com/watch?v=gE44vK-LXL0',
        max_team_size: 15,
        registration_deadline: '2023-11-15T23:59:00Z',
        poster: 'https://www.nationalsportschampionship.com/poster2023.jpg',
        tags: 'sports, championship, competition, games',
        min_team_size: 5,
    },
    {
        id: 'EV006',
        name: 'World Literature Conference',
        organizer: 'Literary Association',
        venue: 'British Library, London',
        start_time: '2023-11-10T09:00:00Z',
        description:
            'A gathering of literary enthusiasts and scholars to discuss and share their knowledge on world literature',
        end_time: '2023-11-12T17:00:00Z',
        prize: '2,000',
        registration_fee: '250.00',
        video: 'https://www.youtube.com/watch?v=uLm8gH7Vu9U',
        max_team_size: 4,
        registration_deadline: '2023-10-31T23:59:00Z',
        poster: 'https://www.worldliteratureconference.com/poster2023.jpg',
        tags: 'literature, conference, discussion, sharing',
        min_team_size: 1,
    },
    {
        id: 'EV007',
        name: 'Global Climate Change Summit',
        organizer: 'Climate Action Network',
        venue: 'United Nations Headquarters, New York',
        start_time: '2023-09-05T09:00:00Z',
        description:
            'A platform for leaders, experts, and activists to discuss and address the global issue of climate change',
        end_time: '2023-09-07T17:00:00Z',
        prize: '5,000',
        registration_fee: '300.00',
        video: 'https://www.youtube.com/watch?v=WQQ_N9bf9XQ',
        max_team_size: 10,
        registration_deadline: '2023-08-31T23:59:00Z',
        poster: 'https://www.globalclimatechangesummit.com/poster2023.jpg',
        tags: 'climate change, summit, action, discussion',
        min_team_size: 5,
    },
    {
        id: 'EV002',
        name: 'International Music Festival',
        organizer: 'Music and Arts Society',
        venue: 'Central Park, New York',
        start_time: '2023-06-01T12:00:00Z',
        description:
            'A gathering of musicians from all over the world to perform and showcase their talents',
        end_time: '2023-06-05T23:00:00Z',
        prize: '5,000',
        registration_fee: '100.00',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        max_team_size: 8,
        registration_deadline: '2023-05-15T23:59:00Z',
        poster: 'https://www.internationalmusicfestival.com/poster2023.jpg',
        tags: 'music, festival, performance, showcase',
        min_team_size: 4,
    },
    {
        id: 'EV003',
        name: 'World Food Expo',
        organizer: 'Food and Beverage Industry',
        venue: 'Messe Frankfurt, Germany',
        start_time: '2023-08-15T10:00:00Z',
        description:
            'An exhibition of the latest food and beverage products from around the world',
        end_time: '2023-08-19T18:00:00Z',
        prize: '1,000',
        registration_fee: '200.00',
        video: 'https://www.youtube.com/watch?v=M6U3X6UJh6U',
        max_team_size: 10,
        registration_deadline: '2023-07-31T23:59:00Z',
        poster: 'https://www.worldfoodexpo.com/poster2023.jpg',
        tags: 'food, beverage, expo, exhibition',
        min_team_size: 2,
    },
    {
        id: 'EV004',
        name: 'Global Entrepreneurship Summit',
        organizer: 'Entrepreneurship Association',
        venue: 'JW Marriott, Mumbai',
        start_time: '2023-10-01T09:00:00Z',
        description:
            'A platform for entrepreneurs to network, learn and grow their businesses',
        end_time: '2023-10-03T17:00:00Z',
        prize: '10,000',
        registration_fee: '500.00',
        video: 'https://www.youtube.com/watch?v=H1_Lh_Eo9XQ',
        max_team_size: 4,
        registration_deadline: '2023-09-15T23:59:00Z',
        poster: 'https://www.globalentrepreneurshipsummit.com/poster2023.jpg',
        tags: 'entrepreneurship, summit, business, networking',
        min_team_size: 3,
    },
    {
        id: 'EV001',
        name: 'National Science and Maths Quiz',
        organizer: 'Education Ministry',
        venue: 'University of Ghana, Legon',
        start_time: '2023-04-15T08:30:00Z',
        description:
            'Competition for senior high school students to test their knowledge in science and mathematics',
        end_time: '2023-04-17T17:00:00Z',
        prize: '10,000',
        registration_fee: '50.00',
        video: 'https://www.youtube.com/watch?v=U6bhO4lD_kk',
        max_team_size: 4,
        registration_deadline: '2023-03-25T23:59:00Z',
        poster: 'https://www.nationalsciencequiz.com/poster2023.jpg',
        tags: 'science, mathematics, quiz, competition',
        min_team_size: 2,
    },
    {
        id: 'EV000',
        name: 'Test event do not resgister',
        organizer: 'Anwesha',
        venue: 'pata nahi',
        start_time: '2023-02-09T03:20:00Z',
        description: 'Some random description',
        end_time: '2023-02-07T12:50:00Z',
        prize: '150',
        registration_fee: '1000.00',
        video: '',
        max_team_size: 9,
        registration_deadline: '2023-02-22T14:20:00Z',
        poster: '',
        tags: '2',
        min_team_size: 2,
    },
    {
        id: 'EV005',
        name: 'National Sports Championship',
        organizer: 'Sports Council',
        venue: 'Stadium Australia, Sydney',
        start_time: '2023-12-01T09:00:00Z',
        description:
            'An annual championship featuring various sports competitions',
        end_time: '2023-12-05T17:00:00Z',
        prize: '25,000',
        registration_fee: '50.00',
        video: 'https://www.youtube.com/watch?v=gE44vK-LXL0',
        max_team_size: 15,
        registration_deadline: '2023-11-15T23:59:00Z',
        poster: 'https://www.nationalsportschampionship.com/poster2023.jpg',
        tags: 'sports, championship, competition, games',
        min_team_size: 5,
    },
    {
        id: 'EV006',
        name: 'World Literature Conference',
        organizer: 'Literary Association',
        venue: 'British Library, London',
        start_time: '2023-11-10T09:00:00Z',
        description:
            'A gathering of literary enthusiasts and scholars to discuss and share their knowledge on world literature',
        end_time: '2023-11-12T17:00:00Z',
        prize: '2,000',
        registration_fee: '250.00',
        video: 'https://www.youtube.com/watch?v=uLm8gH7Vu9U',
        max_team_size: 4,
        registration_deadline: '2023-10-31T23:59:00Z',
        poster: 'https://www.worldliteratureconference.com/poster2023.jpg',
        tags: 'literature, conference, discussion, sharing',
        min_team_size: 1,
    },
    {
        id: 'EV007',
        name: 'Global Climate Change Summit',
        organizer: 'Climate Action Network',
        venue: 'United Nations Headquarters, New York',
        start_time: '2023-09-05T09:00:00Z',
        description:
            'A platform for leaders, experts, and activists to discuss and address the global issue of climate change',
        end_time: '2023-09-07T17:00:00Z',
        prize: '5,000',
        registration_fee: '300.00',
        video: 'https://www.youtube.com/watch?v=WQQ_N9bf9XQ',
        max_team_size: 10,
        registration_deadline: '2023-08-31T23:59:00Z',
        poster: 'https://www.globalclimatechangesummit.com/poster2023.jpg',
        tags: 'climate change, summit, action, discussion',
        min_team_size: 5,
    },
]

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        let host = process.env.NEXT_PUBLIC_HOST
        fetch(`https://${host}/event/allevents`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setEvents(arr) // TODO: change it to setEvents(data) when API is populated with data
            })
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>Events - Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            <div style={{ height: 100 }}></div>
            <div className={styles.container}>
                <h1>Events</h1>

                <div className={styles.content}>
                    {events.map((event) => {
                        return <EventItem event={event} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Events
