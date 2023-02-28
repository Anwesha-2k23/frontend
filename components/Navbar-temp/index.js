import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { AuthContext } from '../authContext'
import { useRouter } from "next/router";

const host = process.env.NEXT_PUBLIC_HOST

function Navigation() {
    const userData = useContext(AuthContext);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const router = useRouter();

    console.log(router.pathname)

    const toggleDrawer = () => {
        if (!drawerOpen) {
            document.getElementById('drawer').style.display = 'block'
            setTimeout(function () {
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

    const handleLogout = () => {
        fetch(`${host}/user/logout`, 
        {method: 'POST', redirect: 'follow', credentials: 'include'})
        .then(() => userData.getUser())
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
                    <Image
                        src="/Anwesha_text_black.png"
                        alt="logo"
                        width={200}
                        height={40}
                    />
                </Link>
                <div className={styles.navLinks}>
                    <ul>
                        {/* <li>
                            <Link href="/">Home</Link>
                        </li> */}
                        <li style={router.pathname === '/all-multicity' ? {borderBottom: '3px solid white'} : null}>
                            <Link href="/all-multicity">Multicity</Link>
                        </li>
                        <li style={router.pathname === '/campusambassador' ? {borderBottom: '3px solid white'} : null}> 
                            <Link href="/campusambassador">
                                Campus Ambassador
                            </Link>
                        </li>
                        <li style={router.pathname === '/events' ? {borderBottom: '3px solid white'} : null}>
                            <Link href="/events">Events</Link>
                        </li>
                        <li>
                            {userData.isAuth ? <div className={styles.user_container}><Link className={styles.user_info} href='/profile'><div><span className={styles.user_name}>{userData.state.user.full_name}</span><span className={styles.user_id}>{userData.state.user.anwesha_id}</span></div></Link>
                            <Image src='/assets/logout.svg' className={styles.logout} height={40} width={40} alt='logout' onClick={handleLogout}/></div> : <Link className={styles.login} href="/userLogin">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>

            <div id="drawer" className={styles.nav_drawer}>
                <ul>
                    {/* <li>
                        <Link href="/">Home</Link>
                    </li> */}
                    <li>
                        <Link href="/all-multicity">Multicity</Link>
                    </li>
                    <li>
                        <Link href="/campusambassador">Campus Ambassador</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    <li>
                        {userData.isAuth ? <div className={styles.user_container}><Link className={styles.user_info} href='/profile'><div><span className={styles.user_name}>{userData.state.user.full_name}</span><span className={styles.user_id}>{userData.state.user.anwesha_id}</span></div></Link>
                        <Image src='/assets/logout.svg' className={styles.logout} height={40} width={40} alt='logout' onClick={handleLogout}/></div> : <Link className={styles.login} href="/userLogin">Login</Link>}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation
