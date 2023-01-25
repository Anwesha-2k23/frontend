import styles from '../styles/all-multicity.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'

const Multicity = () => {
    useEffect(() => {
        if(window.innerWidth < 1240){
            window.location.href = '/all-multicity-mobile'
        }
    }, [])
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Multicity-Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            <div style={{ height: '250px' }}></div>
            <h1>Multicity Auditions</h1>
            <Image
                alt="IIT Patna"
                src="/multicity/school.png"
                width={200}
                height={200}
                style={{ transform: 'translateX(-170px)' }}
            />

            <Image
                alt="road"
                src="/multicity/road.png"
                width={470}
                height={831}
            />
            <Image
                alt="road"
                src="/multicity/road.png"
                width={470}
                height={831}
                style={{ transform: 'scaleX(-1) translateY(-10px)' }}
            />

            {/* mandala */}
            <div className={styles.mandala} style={{ top: '35%' }}>
                <Image
                    alt="mandala"
                    src="/multicity/mandala.png"
                    width={500}
                    height={800}
                />
                <Image
                    alt="mandala"
                    src="/multicity/mandala.png"
                    width={500}
                    height={800}
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>
            <div className={styles.mandala} style={{ top: '135%' }}>
                <Image
                    alt="mandala"
                    src="/multicity/mandala.png"
                    width={500}
                    height={800}
                />
                <Image
                    alt="mandala"
                    src="/multicity/mandala.png"
                    width={500}
                    height={800}
                    style={{ transform: 'scaleX(-1)' }}
                />
            </div>

            {/* cities */}
            <div className={styles.city} style={{ top: '85%' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, overflowX: 'visible' }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        alt="dancer"
                        src="/multicity/dancer.png"
                        width={100}
                        height={200}
                        style={{
                            transform: 'translateX(170px) translateY(100px)',
                            overflowX: 'visible',
                        }}
                    ></Image>
                </motion.div>

                <Image
                    alt="milestone"
                    src="/multicity/milestone.png"
                    width={400}
                    height={300}
                ></Image>
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    whileInView={{ opacity: 1, x: '0' }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '410px' }}
                >
                    <Image
                        alt="poster"
                        src="/multicity/Lucknow-poster.png"
                        width={400}
                        height={400}
                        className={styles.poster}
                    ></Image>
                </motion.div>
            </div>
            <div className={styles.city} style={{ top: '185%' }}>
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    whileInView={{ opacity: 1, x: '0' }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '410px' }}
                >
                    <Link href="/kolkata">
                        <Image
                            alt="poster"
                            src="/multicity/kolkata.png"
                            width={400}
                            height={400}
                            style={{ borderRadius: '20px' }}
                            className={[
                                styles.poster,
                                styles.kolkataPoster,
                            ].join(' ')}
                        ></Image>
                    </Link>
                </motion.div>
                <Image
                    alt="milestone"
                    src="/multicity/milestone.png"
                    style={{ transform: 'scaleX(-1)' }}
                    width={400}
                    height={300}
                ></Image>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, overflowX: 'visible' }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        alt="dancer"
                        src="/multicity/dancer.png"
                        width={100}
                        height={200}
                        style={{
                            transform: 'translateX(-140px) translateY(100px) scaleX(-1)',
                            overflowX: 'visible',
                        }}
                    ></Image>
                </motion.div>
            </div>

            {/* other elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: '180px' }}
                whileInView={{ opacity: 1, scale: 1, x: '180px' }}
                transition={{ duration: 0.1 }}
                className={styles.otherElements}
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
        </div>
    )
}

export default Multicity
