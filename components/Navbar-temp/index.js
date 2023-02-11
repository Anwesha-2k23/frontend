import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

function Navigation() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = ()=>{
        if(!drawerOpen){
            document.getElementById('drawer').style.display = 'block'
            setTimeout(function(){
                document.getElementById('drawer').style.opacity = 1
            }, 300)
            setDrawerOpen(true)
        } else {
            document.getElementById('drawer').style.opacity = 0
            setTimeout(function () {
                document.getElementById('drawer').style.display = 'none'
            }, 300)
            setDrawerOpen(false)
        }
    }

    //TODO: make the navbar pick the background color of the viewed page
    return (
        <>
            <div className={styles.mainNav}>
                <button
                    className={styles.mobile_only}
                    style={{ background: 'none', border: 'none' }}
                    onClick={() => toggleDrawer()}
                >
                    <Image
                        src="/navbar/hamburger.png"
                        alt="drawer"
                        width={35}
                        height={35}
                        className={styles.mobile_nav}
                    />
                </button>
                <Link href="/" className={styles.navLogo}>
                    <Image src="/Anwesha_text_black.png" alt="logo" width={200} height={40} />
                </Link>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/all-multicity">Multicity</Link>
                        </li>
                        <li>
                            <Link href="/campusambassador">
                                Campus Ambassador
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="drawer" className={styles.nav_drawer}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/all-multicity">Multicity</Link>
                    </li>
                    <li>
                        <Link href="/campusambassador">Campus Ambassador</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation
