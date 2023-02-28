import styles from '../styles/all-multicity.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Multicity = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (window.innerWidth > 1240) {
            window.location.href = '/all-multicity'
        }
        setHeight(window.innerHeight)
    }, [])
    return (
        <div className={styles.container} style={{ overflow: 'hidden' }}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div style={{ height: '5vh' }}></div>
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
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '310px', top: '75%', position: 'absolute' }}
            >
                <Link href="/multicity/lucknow">
                    <Image
                        alt="poster"
                        src="/multicity/Lucknow-poster.png"
                        width={300}
                        height={300}
                        className={styles.poster}
                    ></Image>
                </Link>
            </motion.div>

            <Image
                alt="road"
                src="/multicity/mobile-road.png"
                width={150}
                height={500}
                style={{ transform: 'translateY(-10px)', objectFit: 'cover' }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={styles.otherElements}
                style={{ top: height > 756 ? '120%' : 925 }}
            >
                <Image
                    alt="drumroll"
                    src="/multicity/drumroll.png"
                    width={90}
                    height={149}
                />
                <Image
                    alt="salescar"
                    src="/multicity/salescar.png"
                    width={185}
                    height={176}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.1 }}
                whileInView={{ opacity: 1, y: -1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '310px',
                    top: height > 756 ? '150%' : 1200,
                    position: 'absolute',
                }}
            >
                <Link href="/multicity/bhopal">
                    <Image
                        alt="poster"
                        src="/multicity/bhopal_poster.jpeg"
                        width={300}
                        height={300}
                        style={{ borderRadius: '20px' }}
                        className={[styles.poster, styles.kolkataPoster].join(
                            ' '
                        )}
                    ></Image>
                </Link>
            </motion.div>
            <Image
                alt="cloud"
                src="/multicity/cloud.png"
                width={234}
                height={96}
                style={{
                    transform: 'translateY(-75px) translateX(-35px) scale(1.2)',
                }}
            />
            <Image
                alt="cloud"
                src="/multicity/cloud2.png"
                width={234}
                height={96}
                style={{ transform: 'translateY(-150px) translateX(38px)' }}
            />
        </div>
    )
}

export default Multicity
