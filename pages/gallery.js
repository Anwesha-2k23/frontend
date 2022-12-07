import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery';

export default function Multicity() {
    const images=[
        "https://images.unsplash.com/photo-1642060880454-fcc688d948f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1669758226726-8187a77d2875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1669752096459-d6be662a93c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1650748029769-317ee0fbd4fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1669974227629-746aa5144d48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1638567519609-de26b1f3c179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1670261234942-82dcc6daba4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1670338514993-4bab838412f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    ]
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
                <Gallery 
                    eventName="Event-1" 
                    desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt exercitationem veritatis officia nulla ipsam beatae! Laboriosam atque porro accusamus consectetur, dolorum odio voluptatum vel"
                    images={images}/>
                <Gallery eventName="Event-2" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt exercitationem veritatis officia nulla ipsam beatae! Laboriosam atque porro accusamus consectetur, dolorum odio voluptatum vel" images={images}></Gallery>
                <Gallery eventName="Event-3" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt exercitationem veritatis officia nulla ipsam beatae! Laboriosam atque porro accusamus consectetur, dolorum odio voluptatum vel" images={images}></Gallery>

            </div>
        </>
    );
}
