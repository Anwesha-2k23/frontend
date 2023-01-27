import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/Lucknow.module.css'
import FadeInWhenVisible from '../../components/FadeInWhenVisible/FadeInWhenVisible'
const Gallery = dynamic(() => import('../../components/Gallery/Gallery'), {
    ssr: false,
})

// TODO: Add images of lucknow multicity
const images = [
    '/multicity/lucknow/1.jpg',
    '/multicity/lucknow/3.jpg',
    '/multicity/lucknow/4.jpg',
    '/multicity/lucknow/6.jpg',
    '/multicity/lucknow/7.jpg',
    '/multicity/lucknow/8.jpg',
    '/multicity/lucknow/9.JPG',
    '/multicity/lucknow/10.JPG',
    '/multicity/lucknow/11.JPG',
    '/multicity/lucknow/12.JPG',
    '/multicity/lucknow/13.JPG',
    '/multicity/lucknow/15.JPG',
    '/multicity/lucknow/16.JPG',
]

export default function Multicity() {
    const { ref, inView } = useInView()

    return (
        <>
            <Head>
                <title>Multicity-Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="/AnwehsaIcon.png" />
            </Head>

            <div className={styles.hero}></div>

            <div className={styles.container}>
                <div className="CoverDiv" ref={ref}>
                    <FadeInWhenVisible inView={inView}>
                        <div className={styles.title}>
                            Anwesha Multicity Auditions
                        </div>
                    </FadeInWhenVisible>
                </div>

                <div className={styles.description}>
                    <div className={styles.text}>
                        <p className={styles.heading}>Lucknow</p>
                        <p className={styles.content}>
                            “Zindagi ka safar toh yun hi chalta jaega. Pta tha
                            lucknow jakar, ek tukda dil ka vahin choot jaega.”
                            <br />
                            <br />
                            Our Anwesha team went to Lucknow to conduct
                            multi-city auditions at BBDU, in a big city with
                            millions of budding talents. The impeccable hosting
                            by Aaina BBDU gave those talented spirits a way to
                            showcase their flair. The team returned with a bag
                            full of everlasting memories. We at Anwesha would
                            like to extend our heartfelt gratitude to BBDU
                            Lucknow for hosting us.
                            <br />
                            <br />
                            The multicity auditions by Team Anwesha were nothing
                            short of magical. Held in the enchanting city of
                            Lucknow, the auditions were a whirlwind of talent,
                            laughter, and wonder. The participants, who hailed
                            from all corners of the city, brought their own
                            brand of magic to the stage, leaving the judges
                            spellbound. The energy in the room was electric, as
                            if a group of unicorns had converged to showcase
                            their talents. The team at Anwesha worked tirelessly
                            to make the audition process as seamless as
                            possible. All in all, it was a fantastical
                            experience that left us all eagerly counting down
                            the days until the main event.
                        </p>
                    </div>
                    <button
                        className={styles.btn}
                        disabled
                        style={{ cursor: 'not-allowed' }}
                    >
                        <span
                            style={{
                                textDecoration: 'none',
                                cursor: 'not-allowed',
                            }}
                        >
                            Register
                        </span>{' '}
                    </button>
                    <button className={styles.btn}>
                        <Link
                            href="/multicity/rulebook.pdf"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                        >
                            Rulebook
                        </Link>{' '}
                    </button>
                </div>
            </div>
            <div className={styles.gallery}>
                <Gallery
                    eventName="Some glimpses"
                    desc="Here are some pictures of our last Lucknow multicity events"
                    images={images}
                />
            </div>
            {/* <div className={styles.rulebook} id="rulebook">
                <embed
                    src="/multicity/rulebook.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    view="Fit"
                    type="application/pdf"
                    width="100%"
                    style={{ height: '100vh' }}
                />
            </div> */}
        </>
    )
}
