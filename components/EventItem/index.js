import Image from 'next/image'
import styles from './eventitem.module.css'
import { motion } from 'framer-motion'
import Modal from '../BigModal'
import { useState } from 'react'

const index = () => {
    const [modal, setModal] = useState(false)

    const close = ()=>{
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
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="Fest Image"
                        width={250}
                        height={250}
                        style={{ borderRadius: 5 }}
                        objectFit={'contain'}
                    />
                </div>
                <p className={styles.img__description}>
                    <span style={{ marginBottom: '10px' }}>Know more...</span>{' '}
                </p>
                4
            </div>
            <div className={styles.eventName}>Dance Show</div>
        </div>
            {modal && (
                <>
                    <span
                        style={{
                            position: 'absolute',
                            top: '30vh',
                            right: '20vw',
                            zIndex: 101,
                            fontSize: 30,
                            color: '#000',
                            fontWeight: '900',
                        }}
                        onClick={() => setModal(false, ()=>console.log("Changed!"))}
                    >
                        x
                    </span>
                    <Modal
                        title="Event Name"
                        body="Lorem ipsum dolor sit amet consectetur. Tristique consectetur nunc erat risus ultrices nunc quam ornare. Aliquam dignissim sollicitudin a hac morbi ultricies viverra. Pharetra molestie sed scelerisque faucibus sed morbi consequat. Proin scelerisque sapien est enim massa elementum arcu nunc. Hac est enim suspendisse sit habitant et arcu. Aliquam ac justo sed potenti enim. Rhoncus auctor nulla nec tristique duis eu et."
                        closeHandler={close}
                    />
                </>
            )}
        </>
    )
}

export default index
