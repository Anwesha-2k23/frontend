import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/gallery.module.css'

// Component to render a row of images
function GalleryRow({ images }) {
    return (
        <div className={styles.galleryRow}>
            {images.map((src, idx) => (
                <div key={idx} className={styles.galleryCard}>
                    <img
                        src={src}
                        alt="Gallery Image" // No index numbers in alt
                        className={styles.image}
                    />
                </div>
            ))}
        </div>
    )
}

// Main GalleryPage component
export default function GalleryPage({ folderLinks }) {
    const [fadeOut, setFadeOut] = useState(false)

    // Handling fade-out effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setFadeOut(scrollPosition > window.innerHeight / 9)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const allImages = folderLinks.flatMap((folder) => folder.links)

    return (
        <>
            <Head>
                <title>Anwesha 2024 Glimpse</title>
            </Head>

            <div className={styles.container}>
                {/* Fullscreen Text with Fading Effect */}
                <div
                    className={`${styles.fullscreenText} ${
                        fadeOut ? styles.fadeOut : ''
                    }`}
                >
                    <div className={styles.glimpse}>
                        GLIMPSE
                    </div>
                    <div className={styles.anwesha}>
                        <span className={styles.anweshaA}>
                            A
                        </span>
                        NWESHA
                        <span className={styles.anwesha24}>
                          '24
                        </span>
                    </div>
                </div>

                {/* Stacked Image Section */}
                <div className={styles.imageStack}>
                    <img
                        src="/gallery/_DC_4278.JPG"
                        alt="Stacked Image 1"
                        className={styles.stackedImage}
                        style={{ '--i': -3 }}
                    />
                    <img
                        src="/gallery/_DSC_4142.png"
                        alt="Stacked Image 2"
                        className={styles.stackedImage}
                        style={{ '--i': -2 }}
                    />
                    <img
                        src="/gallery/_DSC2495.JPG"
                        alt="Stacked Image 3"
                        className={styles.stackedImage}
                        style={{ '--i': -1 }}
                    />
                    <img
                        src="/gallery/Screenshot 2024-12-16 at 1.27.35 AM.png"
                        alt="Stacked Image 4"
                        className={styles.stackedImage}
                        style={{ '--i': 0 }}
                    />
                    <img
                        src="/gallery/Screenshot 2024-12-16 at 1.13.18 AM.png"
                        alt="Stacked Image 5"
                        className={styles.stackedImage}
                        style={{ '--i': 1 }}
                    />
                </div>

                <div className={styles.galleryContainer}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <img src="/gallery/_DC_4278.JPG" alt="Left Image 1" />
                        <img src="/gallery/Frame 239513.png" alt="Left Image 2" />
                        <img src="/gallery/_DC_4278.JPG" alt="Left Image 3" />
                        <img src="/gallery/Frame 239513.png" alt="Left Image 4" />
                    </div>

                    {/* Middle Overlapping Column */}
                    <div className={styles.middleColumn}>
                        <div className={styles.textBlock}>
                            <div className={styles.mainTitle}>ANWESHA 2024</div>
                            <div className={styles.subTitle}>GLIMPSE</div>
                        </div>
                        <img
                            src="/gallery/Frame 239513.png"
                            alt="Middle Image 1"
                        />
                        <img
                            src="/gallery/Frame 239517.png"
                            alt="Middle Image 2"
                        />
                        <img
                            src="/gallery/Frame 239513.png"
                            alt="Middle Image 3"
                        />
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <img
                            src="/gallery/Frame 239514.png"
                            alt="Right Image 2"
                        />
                        <img
                            src="/gallery/Frame 239516.png"
                            alt="Right Image 2"
                        />
                        <img
                            src="/gallery/Frame 239514.png"
                            alt="Right Image 2"
                        />
                        <img
                            src="/gallery/Frame 239516.png"
                            alt="Right Image 2"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

// Fetching folder links
export async function getServerSideProps() {
    const folderLinks = [
        {
            name: 'Gallery Section 1',
            links: ['/gallery/_DC_4278.JPG', '/gallery/_DSC_4142.png'],
        },
        {
            name: 'Gallery Section 2',
            links: [
                '/gallery/_middle_left_1.JPG',
                '/gallery/_middle_right_1.JPG',
            ],
        },
    ]

    return { props: { folderLinks } }
}
/* vi: set et sw=4: */
