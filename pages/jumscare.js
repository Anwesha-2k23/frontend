import React, { useState, useEffect } from 'react'
import styles from './jumscare.module.css'
import Image from 'next/image'

const VideoPlayer = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 700)

            const handleResize = () => {
                setIsMobile(window.innerWidth < 700)
            }

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={styles.jumscare_div}>
            {!isMobile && (
                <Image
                    className={styles.img}
                    src="/pics/jump.gif"
                    alt="Scary GIF"
                    width={200}
                    height={100}
                    priority // Optimizes image loading
                />
            )}
        </div>
    )
}

export default VideoPlayer
