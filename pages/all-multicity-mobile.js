import styles from '../styles/all-multicity.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'

const Multicity = () => {
    useEffect(() => {
        if (window.innerWidth > 1240) {
            window.location.href = '/all-multicity'
        }
    }, [])
    return (
        <div className={styles.container} style={{ overflow: 'hidden' }}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
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
                {/* TODO: replace with lucknow link  */}
                <Link href="">
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
                style={{ top: '120%' }}
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
                style={{ width: '310px', top: '150%', position: 'absolute' }}
            >
                {/* TODO: replace with bhopal link  */}
                <Link href="">
                    <Image
                        alt="poster"
                        src="/multicity/bhopal_poster.png"
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
                width={232}
                height={190}
                style={{ transform: 'translateY(-40px) scale(1.5)' }}
            />
        </div>
    )
}

export default Multicity
