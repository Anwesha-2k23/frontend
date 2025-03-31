import Image from 'next/image'
import styles from './eventitem.module.css'
import { motion } from 'framer-motion'
import Modal from '../BigModal'
import { useState } from 'react'


const index = ({ event, onClick }) => {
    const [modal, setModal] = useState(false)
    const [first, second] = (event?.name ?? "").split("#");



    return (
        <>

            <div
                className={styles.card}
                onClick={onClick}

            >

                {/* {event.is_active ? null : (
                    <img
                        src="/assets/coming-soon.png"
                        style={{
                            position: 'absolute',
                            top: '8px',
                            right: '30px',
                            zIndex: 2,
                            height: '100px',
                        }}
                        alt="Coming Soon"
                    />
                )} */}
                <div className={`${styles.imageWrap}`} style={{
                    background: `url('${event.poster
                        ? event.poster
                        : '/events/poster1.png'}') center center / cover no-repeat `
                }}>
                    <div className={styles.innerShadow}> {/* Add shadow layer */}
                        <div className={styles.eventDescription}>
                            <div className={styles.eventName}>{first}</div>
                            <div className={styles.smalldescription}>{second}</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* {modal && (
                <>
                    <Modal
                        title={first}
                        body={event}
                        closeHandler={close}
                    />
                </>
            )} */}
        </>
    )
}

export default index
