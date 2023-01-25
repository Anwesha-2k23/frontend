import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/Multicity.module.css'
import FadeInWhenVisible from '../components/FadeInWhenVisible/FadeInWhenVisible'
const Gallery = dynamic(() => import('../components/Gallery/Gallery'), {
    ssr: false,
})
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
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
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>
            <div
                style={{
                    width: '100vw',
                    height: '100px',
                    background: '#a7e2dc',
                }}
            ></div>

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
                        <p className={styles.heading}>Kolkata</p>
                        <p className={styles.content}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iusto minus voluptatem, nisi neque maiores
                            accusantium, rerum, aliquam ullam totam libero sunt!
                            Optio similique, ipsam, asperiores tenetur
                            repudiandae maiores fugit earum, aliquid
                            consequuntur aliquam dignissimos culpa aperiam
                            perferendis aspernatur voluptas ut?Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Quae est
                            maiores facilis accusantium veniam tempora, deserunt
                            recusandae quam ea eius, fuga architecto doloremque
                            cumque eligendi, nam natus. Nemo repellat placeat
                            doloremque quod veniam officia dolores eum,
                            veritatis natus id labore ut modi sunt quisquam non
                            fugit quas magni a quidem dicta perferendis fugiat
                            totam reiciendis! Consequuntur modi, facere saepe
                            repellat autem nobis?
                        </p>
                    </div>
                    <button className={styles.btn}>Register</button>
                    <button className={styles.btn}>
                        <Link href='#rulebook' style={{textDecoration: 'none',}}>Rulebook</Link>{' '}
                    </button>
                </div>
            </div>
            <div className={styles.gallery}>
                <Gallery
                    eventName="Some glimpses"
                    desc="Here are some pictures of our last kolkata multicity events"
                    images={images}
                />
            </div>
            <div className={styles.rulebook} id="rulebook">
                <embed
                    src="/multicity/rulebook.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    view="Fit"
                    type="application/pdf"
                    width="100%"
                    style={{ height: '100vh' }}
                />
            </div>
        </>
    )
}
