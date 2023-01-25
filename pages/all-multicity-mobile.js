import styles from '../styles/all-multicity.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'

const Multicity = () => {
    useEffect(() => {
        if(window.innerWidth > 1240){
            window.location.href = '/all-multicity'
        }
    }, [])
    return (
        <div className={styles.container}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            <div style={{ height: '19vh' }}></div>
            <Image
                alt="IIT Patna"
                src="/multicity/school.png"
                width={200}
                height={200}
            />
            <Image
                alt="road"
                src="/multicity/mobile-road.png"
                width={150}
                height={831}
            />
            <motion.div
                    initial={{ opacity: 0, x: '30%' }}
                    whileInView={{ opacity: 1, x: '0' }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '310px', top: '75%', position: 'absolute' }}
                >
                    <Image
                        alt="poster"
                        src="/multicity/Lucknow-poster.png"
                        width={300}
                        height={300}
                        className={styles.poster}
                    ></Image>
            </motion.div>

            <Image
                alt="road"
                src="/multicity/mobile-road.png"
                width={150}
                height={831}
                style={{transform: 'translateY(-10px)' }}
            />
            <motion.div
                    initial={{ opacity: 0, x: '30%', y: -10 }}
                    whileInView={{ opacity: 1, x: '0', y: -10 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '310px', top: '150%', position: 'absolute' }}
                >
                    <Link href="/kolkata">
                        <Image
                            alt="poster"
                            src="/multicity/kolkata.png"
                            width={300}
                            height={300}
                            style={{ borderRadius: '20px' }}
                            className={[
                                styles.poster,
                                styles.kolkataPoster,
                            ].join(' ')}
                        ></Image>
                    </Link>
                </motion.div>
        </div>
    )
}

export default Multicity
