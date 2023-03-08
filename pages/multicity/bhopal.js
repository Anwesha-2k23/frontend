import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/Bhopal.module.css'
import FadeInWhenVisible from '../../components/FadeInWhenVisible/FadeInWhenVisible'
const Gallery = dynamic(() => import('../../components/Gallery/Gallery'), {
    ssr: false,
})

const images = [
    'https://whataftercollege.com/wp-content/uploads/2019/03/Cover-image-11-1024x535.jpg',

    'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/hansraj-college%2Cjpg00.jpg',

    'https://www.thehighereducationreview.com/newsimagespl/e1lpgT67.jpeg',

    'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/10/grub-1570690748.jpg',

    'https://blog.stucred.com/wp-content/uploads/2019/04/david-calderon-973699-unsplash.jpg',

    'https://i0.wp.com/du-assassins.in/wp-content/uploads/2019/01/13srcc1.jpg?fit=580%2C386&ssl=1',

    'https://www.holidify.com/images/cmsuploads/compressed/1516704233Soma2-1600X900_20190123222123.jpg',

    'https://static.kiit.ac.in/news/2019/02/16085130/KIIT-Fest-2019-Inaguration-Day-1-4.jpg',

    'https://utsav.gov.in/public/uploads/event_picture_image/event_1189/1663672816468241902.jpg',

    'https://images.unsplash.com/46/unsplash_52c319226cefb_1.JPG?ixlib=rb-4.0.3',
]

export default function Multicity() {
    const { ref, inView } = useInView()

    return (
        <>
            <Head>
                <title>Multicity-Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
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
                        <p className={styles.heading}>Bhopal</p>
                        <p className={styles.content}>
                            Get ready Bhopal, the stage is set and the spotlight
                            is on you! Anwesha is bringing its multicity
                            auditions to your city, and we are excited to see
                            the amazing talent that you have to offer. <br />{' '}
                            <br /> Whether you're a singer, dancer, actor,
                            musician, or any other kind of artist, we want to
                            see what you've got! Flaunt your talents and compete
                            for a chance to win Anwesha goodies and free passes
                            to the main fest. <br />
                            <br /> Register for the multi-city auditions and
                            check out the rulebook for more details!
                            <br /> <br />
                            Venue: Technocrats Institute of Technology and
                            Science
                            <br />
                            Dates: 4th - 5th February, 2023
                        </p>
                    </div>
                    <button className={styles.btn}>
                        <Link
                            href="./multicityregistration/bhopalreg"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                        >
                            Register
                        </Link>
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
            {/* <div className={styles.gallery}>
                <Gallery
                    eventName="Some glimpses"
                    desc="Here are some pictures of our last Bhopal multicity events"
                    images={images}
                />
            </div> */}
            <div style={{ height: '100px' }}></div>
        </>
    )
}
