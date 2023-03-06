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
                document.getElementById('drawer').style.display = 'none'
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
            document.getElementById('drawer').style.display = 'none'
        }, 300)
        setDrawerOpen(false)
    }, [router.pathname])

    const toggleDrawer = () => {
        const drawer = document.getElementById('drawer')
        if (!drawerOpen) {
            drawer.style.display = 'block'
            setTimeout(() => (drawer.style.opacity = 1), 300)
        } else {
            drawer.style.opacity = 0
            setTimeout(() => (drawer.style.display = 'none'), 300)
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
                className={styles.mainNav}
                style={{ color: isHome ? 'white' : 'black' }}
                ref={refNav}
            >
                {/* <button
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
                </button> */}
                <div className={styles.hamburger}>
                    <RiveComponent
                        onClick={() => {
                            toggleDrawer()
                        }}
                    />
                </div>
                <Link
                    href="/"
                    onClick={() => onClickInput.fire()}
                    className={styles.navLogo}
                >
                    {['/'].includes(router.pathname) ? (
                        <Image
                            src="/navbar/logo_no_bg.svg"
                            alt="logo"
                            width={60}
                            height={40}
                        />
                    ) : (
                        <Image
                            src="/navbar/logo_no_bg.svg"
                            alt="logo"
                            width={60}
                            height={40}
                        />
                    )}
                </Link>
                <div className={styles.navLinks}>
                    <ul>
                        {/* <li>
                            <Link href="/">Home</Link>
                        </li> */}
                        <li
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
                        </li>
                        <li
                            style={
                                router.pathname === '/campusambassador'
                                    ? { borderBottom: '3px solid white' }
                                    : null
                            }
                        >
                            <Link
                                className={styles.linknav}
                                href="/campusambassador"
                            >
                                Campus Ambassador
                            </Link>
                        </li>
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
                        <li>
                            {userData.isAuth ? (
                                <div className={styles.user_container}>
                                    <Link
                                        className={styles.user_info}
                                        href="/profile"
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
                    {/* <li>
                        <Link href="/">Home</Link>
                    </li> */}
                    <li>
                        <Link
                            href="/all-multicity"
                            onClick={() => toggleDrawer()}
                        >
                            Multicity
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/campusambassador"
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
