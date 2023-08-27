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
            city: 'Lucknow',
            date: '10/09/23',
            venue: 'BBD NIIT',
            registration_deadline: '05/09/23',
            registration_fee: 'Nil',
            timings: '09:00 AM - 06:00 PM',
            contact: [
                { name: 'Yash Raj Singh', phone: '8789866763' },
                { name: 'Divyam Walia', phone: '9105889422' },
            ],
            register_link: 'https://docs.google.com/forms/d/e/1FAIpQLSfdKPCSrc0gj4R8jcq6-C0E9zc-lMp1phBzJxwlOQeZuZhi9A/viewform?usp=sf_link',
            rulebook_link: 'http://bit.ly/3Rba0Wv',
        },
        // {
        //     key: 2,
        //     city: 'Kolkata',
        //     date: 'DD/MM/YY',
        //     venue: 'Say IIT BHU',
        //     registration_deadline: 'DD/MM/YY',
        //     registration_fee: 'If Any',
        //     timings: '00:00 PM',
        //     contact: { name: 'Abhilasha', phone: '9262293394' },
        //     register_link: '#',
        //     rulebook_link: '#',
        // },
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <img src={'/multicity/MulticityHeroImage.png'} className={styles.heroImage} />
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
