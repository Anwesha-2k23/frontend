import Image from 'next/image'
import styles from './eventitem.module.css'
import { motion } from 'framer-motion'
import Modal from '../BigModal'
import { useState } from 'react'

const index = ({ event }) => {
    const [modal, setModal] = useState(false)

    const close = () => {
        setModal(false)
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
                onClick={() => setModal(true)}
            >
                <div className={styles.imageWrap}>
                    <div className={styles.item}>
                        <Image
                            // src={event.poster? event.poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdHxlbnwwfHwwfHw%3D&w=1000&q=80"}
                            src={
                                'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdHxlbnwwfHwwfHw%3D&w=1000&q=80'
                            }
                            alt="Fest Image"
                            width={250}
                            height={250}
                            style={{ borderRadius: 5 }}
                            objectFit={'contain'}
                        />
                    </div>
                    <p className={styles.img__description}>
                        <span style={{ marginBottom: '10px' }}>
                            Know more...
                        </span>{' '}
                    </p>
                    4
                </div>
                <div className={styles.eventName}>{event.name}</div>
            </div>
            {modal && (
                <>
                    <Modal
                        title={event.name}
                        body={event}
                        closeHandler={close}
                    />
                </>
            )}
        </>
    )
}

export default index
