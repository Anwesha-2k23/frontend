import styles from '../styles/all-multicity.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import { Parallax } from 'react-scroll-parallax'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import MulticityItem from '../components/MulticityItem'

const Multicity = () => {
    // useEffect(() => {
    //     if (window.innerWidth < 1240) {
    //         window.location.href = '/all-multicity-mobile'
    //     }
    // }, [])

    const events_temp = [
        {
            key: 1,
            city: 'Kolkata',
            date: '08/10/23',
            venue: 'ISI Kolkata',
			poster: "/multicity/MulticityPosterKolkata.png",
            registration_deadline: '01/10/23',
            registration_fee: 'Free',
            timings: '09:00 AM - 06:00 PM',
            contact: [
				{ name: 'Akhilesh', phone: '9404549742' },
				{ name: 'Raaj Harsh', phone: '7050277123' },
			],
			completed: false,
            register_link: 'https://docs.google.com/forms/d/e/1FAIpQLScD75l8wtrTlitkQz6OVeYRlOQVIEc80Hzk2wXRAKxyFD-iPQ/viewform',
            rulebook_link: 'https://bit.ly/AnweshaMulticity',
        },
        {
            key: 2,
            city: 'Lucknow',
            date: '10/09/23',
            venue: 'BBD NIIT',
			poster: "/multicity/MulticityPosterLucknow.png",
            registration_deadline: '08/09/23',
            registration_fee: 'Free',
            timings: '09:00 AM - 06:00 PM',
            contact: [
                { name: 'Yash Raj Singh', phone: '8789866763' },
                { name: 'Divyam Walia', phone: '9105889422' },
            ],
			completed: true,
            register_link: 'https://docs.google.com/forms/d/e/1FAIpQLSfdKPCSrc0gj4R8jcq6-C0E9zc-lMp1phBzJxwlOQeZuZhi9A/viewform?usp=sf_link',
            rulebook_link: 'https://bit.ly/AnweshaMulticity',
        },
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
			<div className={styles.topmargin} />
            <img
                loading="lazy"
                src={'/multicity/MulticityHeroImage.png'}
                className={styles.heroImage}
            />
            <div className={styles.title}>
                <img src={'/multicity/MulticityAuditions.svg'} />
                <p className={styles.about}>
                    Anwesha, the CULTURAL FEST at IIT Patna gives a huge
                    opportunity and a massive platform to showcase your
                    extravagant talent. Conducting Multicity Auditions in
                    various cities, brings our extraordinary participants
                    together and gives them a platform to exhibit their
                    diversified skills. So buckle up your shoe and come up with
                    something extraordinary as we come to your city and take you
                    to the Grandest Stage ever - &#34;ANWESHA&#39; 24&#34;
                </p>
            </div>
            <div className={styles.section}>
                <img src={'/multicity/Perks.svg'} />
                <p className={styles.about}>
                    <li>
                        Multicity winner Certificate certified by Anwesha, IIT
                        Patna.
                    </li>
                    <li>
                        Exclusive Anwesha 24 merchandise to winners (like
                        t-shirts, keychain, stickers) from IITP-Anwesha.
                    </li>
                    <li>
                        Free registration for Anwesha 24 final events for all
                        the participants.
                    </li>
                    <li>
                        The winners' names will be featured on our Social Media
                        handles and will be announced on stories of official
                        social media handles.
                    </li>
                    <li>
                        Chance to interact with many talented and passionate
                        participants during the fest at IIT Patna.
                    </li>
                </p>
            </div>
            <div className={styles.title}>
                <img src={'/multicity/Rewards and Recognition.svg'} />
                <p className={styles.about}>
                    <li>
                        Direct selection for the final round in all the events
                        of Anwesha 24.
                    </li>
                    <li>Chance to perform in front of renowned judges.</li>
                    <li>Winners get exciting prizes and vouchers.</li>
                </p>
            </div>
            <div className={styles.content}>
                {events_temp.map((event, index) => {
                    return <MulticityItem event={event} key={index} />
                })}
            </div>
        </div>
    )
    // <Image
    //     alt="IIT Patna"
    //     src="/multicity/school.png"
    //     width={200}
    //     height={200}
    //     style={{ transform: 'translateX(-170px)' }}
    // />
    // <Image
    //     alt="road"
    //     src="/multicity/road.png"
    //     width={470}
    //     height={831}
    // />
    // <Image
    //     alt="road"
    //     src="/multicity/road.png"
    //     width={470}
    //     height={831}
    //     style={{ transform: 'scaleX(-1) translateY(-10px)' }}
    // />
    // {/* mandala */}
    // <div className={styles.mandala} style={{ top: '35%' }}>
    //     <Image
    //         alt="mandala"
    //         src="/multicity/mandala.png"
    //         width={500}
    //         height={800}
    //     />
    //     <Image
    //         alt="mandala"
    //         src="/multicity/mandala.png"
    //         width={500}
    //         height={800}
    //         style={{ transform: 'scaleX(-1)' }}
    //     />
    // </div>
    // <div className={styles.mandala} style={{ top: '135%' }}>
    //     <Image
    //         alt="mandala"
    //         src="/multicity/mandala.png"
    //         width={500}
    //         height={800}
    //     />
    //     <Image
    //         alt="mandala"
    //         src="/multicity/mandala.png"
    //         width={500}
    //         height={800}
    //         style={{ transform: 'scaleX(-1)' }}
    //     />
    // </div>
    // {/* cities */}
    // <div className={styles.city} style={{ top: '85%' }}>
    //     <motion.div
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1, overflowX: 'visible' }}
    //         transition={{ duration: 0.3 }}
    //     >
    //         <Image
    //             alt="dancer"
    //             src="/multicity/dancer.png"
    //             width={100}
    //             height={200}
    //             style={{
    //                 transform: 'translateX(170px) translateY(100px)',
    //                 overflowX: 'visible',
    //             }}
    //         ></Image>
    //     </motion.div>
    //     <Image
    //         alt="milestone"
    //         src="/multicity/milestone.png"
    //         width={400}
    //         height={300}
    //     ></Image>
    //     <motion.div
    //         initial={{ opacity: 0, x: '100%' }}
    //         whileInView={{ opacity: 1, x: '0' }}
    //         transition={{ duration: 0.5 }}
    //         style={{ width: '410px' }}
    //     >
    //         <Link href="/multicity/lucknow">
    //             <Image
    //                 alt="poster"
    //                 src="/multicity/Lucknow-poster.png"
    //                 width={400}
    //                 height={400}
    //                 className={styles.poster}
    //             ></Image>
    //         </Link>
    //     </motion.div>
    // </div>
    // <div className={styles.city} style={{ top: '1700px' }}>
    //     <motion.div
    //         initial={{ opacity: 0, x: '-100%' }}
    //         whileInView={{ opacity: 1, x: '0' }}
    //         transition={{ duration: 0.5 }}
    //         style={{ width: '410px' }}
    //     >
    //         {/* TODO: replace this with bhopal page link */}
    //         <Link href="/multicity/bhopal">
    //             <Image
    //                 alt="poster"
    //                 src="/multicity/bhopal_poster.jpeg"
    //                 width={400}
    //                 height={400}
    //                 style={{ borderRadius: '20px' }}
    //                 className={[
    //                     styles.poster,
    //                     styles.kolkataPoster,
    //                 ].join(' ')}
    //             ></Image>
    //         </Link>
    //     </motion.div>
    //     <Image
    //         alt="milestone"
    //         src="/multicity/milestone_bhopal.png"
    //         width={400}
    //         height={300}
    //     ></Image>
    //     <motion.div
    //         initial={{ opacity: 0 }}
    //         whileInView={{ opacity: 1, overflowX: 'visible' }}
    //         transition={{ duration: 0.3 }}
    //     >
    //         <Image
    //             alt="dancer"
    //             src="/multicity/dancer.png"
    //             width={100}
    //             height={200}
    //             style={{
    //                 transform:
    //                     'translateX(-140px) translateY(100px) scaleX(-1)',
    //                 overflowX: 'visible',
    //             }}
    //         ></Image>
    //     </motion.div>
    // </div>
    // {/* other elements */}
    // <motion.div
    //     initial={{ opacity: 0, scale: 0.5, x: '180px' }}
    //     whileInView={{ opacity: 1, scale: 1, x: '180px' }}
    //     transition={{ duration: 0.1 }}
    //     className={styles.otherElements}
    // >
    //     <Image
    //         alt="drumroll"
    //         src="/multicity/drumroll.png"
    //         width={90}
    //         height={149}
    //     />
    //     <Image
    //         alt="salescar"
    //         src="/multicity/salescar.png"
    //         width={185}
    //         height={176}
    //     />
    // </motion.div>
}

export default Multicity
