import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

const images = [
    {
        src: '/gallery/img.jpg',
    },
    {
        src: '/gallery/img2.jpg',
    },
    {
        src: '/gallery/img3.jpg',
    }
]

export default function Multicity() {
    return (
        <>
            <Head>
                <title>Multicity - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <br /><br />
                <Gallery images={images}></Gallery>
            </div>
            <Footer />
        </>
    );
}
