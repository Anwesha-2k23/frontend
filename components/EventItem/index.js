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
                    position: 'relative'
                }}
                onClick={() => setModal(true)}
            >
                {event.is_active ? null : <img src='/assets/coming-soon.png' style={{position: 'absolute', top: '8px', right: '30px', zIndex: 2, height: '100px' }}/>}
                <div className={styles.imageWrap}>
                    <div className={styles.item}>
                        <img
                            src={
                                event.poster
                                    ? event.poster
                                    : '/events/poster.png'
                            }
                            alt="Fest Image"
                            width={300}
                            height={300}
                            style={{ borderRadius: 15 }}
                            objectFit={'contain'}
                        />
                    </div>
                    <p className={styles.img__description}>
                        <span style={{ marginBottom: '10px' }}>
                            <Image
                                src="/events/Vector.png"
                                width={70}
                                height={70}
                            />
                        </span>{' '}
                    </p>
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
