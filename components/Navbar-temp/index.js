import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../authContext'
import { useRouter } from 'next/router'
import Logo from '../Rive/logo'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
const host = process.env.NEXT_PUBLIC_HOST
const STATE_MACHINE_NAME = 'Basic State Machine'
const INPUT_NAME = 'Switch'

function Navigation() {
    const userData = useContext(AuthContext)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [clickInputFired, setClickInputFired] = useState(false)
    const router = useRouter()
    const [isHome, setIsHome] = useState(['/'].includes(router.pathname))
    const { rive, RiveComponent } = useRive({
        src: '/navbar/hamburger-time.riv',
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME,
    })
    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME
    )

    useEffect(() => {
        if (onClickInput && clickInputFired) {
            onClickInput.fire()
            setClickInputFired(false)
        }
    }, [onClickInput, clickInputFired])

    useEffect(() => {
        console.log(drawerOpen)
        if (drawerOpen) {
            document.addEventListener('click', handleClickOutside)
        }
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [drawerOpen])

    const refNav = useRef(null)

    const handleClickOutside = (event) => {
        if (refNav.current && !refNav.current.contains(event.target)) {
            document.getElementById('drawer').style.opacity = 0
            setTimeout(function () {
                ; (document.getElementById('drawer').style.display = 'none'),
                    (document.getElementById('nav_div').style.backgroundColor =
                        '')
            }, 300)
            setDrawerOpen(false)
            if (onClickInput) {
                onClickInput.fire()
            }
            setClickInputFired(true)
            console.log('clicked outside')
        } else {
        }
    }

    useEffect(() => {
        setIsHome(['/'].includes(router.pathname))
        document.getElementById('drawer').style.opacity = 0
        setTimeout(function () {
            ; (document.getElementById('drawer').style.display = 'none'),
                (document.getElementById('nav_div').style.backgroundColor = '')
        }, 300)
        setDrawerOpen(false)
    }, [router.pathname])

    const toggleDrawer = () => {
        const drawer = document.getElementById('drawer')
        const nav_div = document.getElementById('nav_div')
        if (!drawerOpen) {
            drawer.style.display = 'block'
            setTimeout(
                () => (
                    (drawer.style.opacity = 1),
                    (nav_div.style.backgroundColor = '#63262D')
                ),
                300
            )
        } else {
            drawer.style.opacity = 0
            setTimeout(
                () => (
                    (drawer.style.display = 'none'),
                    (nav_div.style.backgroundColor = '')
                ),
                300
            )
        }
        setDrawerOpen(!drawerOpen)
        onClickInput.fire()
    }

    const handleLogout = () => {
        fetch(`${host}/user/logout`, {
            method: 'POST',
            redirect: 'follow',
            credentials: 'include',
        }).then(() => userData.getUser())
    }

    return (
        <>
            <div
                id="nav_div"
                className={styles.mainNav}
                style={{ color: isHome ? 'white' : 'black' }}
                ref={refNav}
            >
                <div className={styles.hamburger}>
                    <RiveComponent
                        onClick={() => {
                            toggleDrawer()
                        }}
                    />
                </div>
                <Link
                    href="/"
                    onClick={() => (drawerOpen ? onClickInput.fire() : '')}
                    className={styles.navLogo}
                >
                    <Image
                        src="/navbar/logo_no_bg.svg"
                        alt="logo"
                        width={147}
                        height={33}
                    />
                </Link>
                <div className={styles.navLinks}>
                    <ul>
                        {/* <li>
                            <Link href="/">Home</Link>
                        </li> */}
                        {/* <li
                            style={
                                router.pathname === '/all-multicity'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link
                                className={styles.linknav}
                                href="/all-multicity"
                            >
                                Multicity
                            </Link>
                        </li> */}
                        <li
                            style={
                                router.pathname === '/events'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link className={styles.linknav} href="/events">
                                Events
                            </Link>
                        </li>

                        <li
                            style={
                                router.pathname === '/campusambassador24'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link className={styles.linknav} href="/campusambassador24">
                                Campus Ambassador
                            </Link>
                        </li>

                        <li
                            style={
                                router.pathname === '/ourteam'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link className={styles.linknav} href="/ourteam">
                                Team
                            </Link>
                        </li>
                        <li
                            style={
                                router.pathname === '/oursponsors'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link
                                className={styles.linknav}
                                href="/oursponsors"
                            >
                                Our Partners
                            </Link>
                        </li>
                        <li
                            style={
                                router.pathname === '/gallery'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link
                                className={styles.linknav}
                                href="/gallery"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li
                            style={
                                router.pathname === '/aboutus'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link className={styles.linknav} href="/aboutus">
                                About Us
                            </Link>
                        </li>
                        <li
                            style={
                                router.pathname === '/metaverse'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link className={styles.linknav} href="/metaverse">
                                Metaverse
                            </Link>
                        </li>
                        <li>
                            {userData.isAuth ? (
                                <div className={styles.user_container}>
                                    <Link
                                        className={styles.user_info}
                                        href="/profile"
                                    >
                                        <div>
                                            <span className={styles.user_name}>
                                                {userData.state.user.full_name.split(" ")[0]}
                                            </span>
                                            <span className={styles.user_id}>
                                                {userData.state.user.anwesha_id}
                                            </span>
                                        </div>
                                    </Link>
                                    <Image
                                        src="/assets/logout.svg"
                                        className={styles.logout}
                                        height={40}
                                        width={40}
                                        alt="logout"
                                        onClick={handleLogout}
                                    />
                                </div>
                            ) : (
                                <Link
                                    className={styles.login}
                                    href="/userLogin"
                                >
                                    Login
                                </Link>
                            )}
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
                        <Link
                            href="/campusambassador24"
                            onClick={() => toggleDrawer()}
                        >
                            Campus Ambassador
                        </Link>
                    </li>
					<li>
                        <Link href="/events" onClick={() => toggleDrawer()}>
                            Events
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/all-multicity" onClick={() => toggleDrawer()}>
                            Multicity
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/gallery" onClick={() => toggleDrawer()}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/ourteam" onClick={() => toggleDrawer()}>
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/oursponsors"
                            onClick={() => toggleDrawer()}
                        >
                            Our Partners
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutus" onClick={() => toggleDrawer()}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/metaverse" onClick={() => toggleDrawer()}>
                            Metaverse
                        </Link>
                    </li>
                    <li>
                        {userData.isAuth ? (
                            <div className={styles.user_container}>
                                <Link
                                    className={styles.user_info}
                                    href="/profile"
                                    onClick={() => toggleDrawer()}
                                >
                                    <div>
                                        <span className={styles.user_name}>
                                            {userData.state.user.full_name}
                                        </span>
                                        <span className={styles.user_id}>
                                            {userData.state.user.anwesha_id}
                                        </span>
                                    </div>
                                </Link>
                                <Image
                                    src="/assets/logout.svg"
                                    className={styles.logout}
                                    height={40}
                                    width={40}
                                    alt="logout"
                                    onClick={handleLogout}
                                />
                            </div>
                        ) : (
                            <Link
                                className={styles.login}
                                href="/userLogin"
                                onClick={() => toggleDrawer()}
                            >
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation
