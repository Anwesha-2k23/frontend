import Link from "next/link";
import styles from './Navbar.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'


const Navbar = () => {
    return (
        <div >
            {/* <Head>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

            </Head> */}
            <div className={styles.nav_div}>
                <img src="./navbar/navbar mandala left.svg" className={[styles.navbar_3].join(" ")} />
                <img src="./navbar/navbar mandala right.svg" className={styles.navbar_4} />
                <Link href="/">
                    <img src="./navbar/logo.svg" className={[styles.navbar_2].join(" ")} />
                </Link>
                <img src="./navbar/nav bar1.svg" className={styles.navbar_1} />
                <h4 className={` ${styles.item_1} nav-item`}>
                    <Link className="nav-link active" aria-current="page" href="/campusambassador">CA</Link>
                </h4>
                <h4 className={` ${styles.item_2} nav-item`}>
                    <Link className="nav-link active" aria-current="page" href="/all-multicity">Multicity</Link>
                </h4>
                <h4 className={styles.item_3}>
                    <Link className="nav-link active" aria-current="page" href="#">Events</Link>
                </h4>
                <nav className={` navbar   ${styles.toggle_nav}`}>
                    <div className= {`container-fluid`}>
                        <button className={ `${styles.b}  navbar-toggler `} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className= {`navbar-toggler-icon ${styles.toggle_icon}`} ></span>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className={`offcanvas-header ${styles.sidebar_header}`}>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className={`offcanvas-body ${styles.sidebar}`} >
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className={`${styles.h1} nav-item ${styles.sidebar_links}`}>
                                        <Link className={`nav-link active`} aria-current="page" href="/campus_ambassador"><p className={styles.sidebar_links}>CA</p></Link>
                                    </li>
                                    <li className={`${styles.h2} nav-item ${styles.sidebar_links} ${styles.sidebar_links}`}>
                                        <Link className="nav-link active" href="/all-multicity"><p className={styles.sidebar_links}>Multicity</p></Link>
                                    </li>
                                    <li className={`${styles.h3} nav-item ${styles.sidebar_links}`}>
                                        <Link className="nav-link active" aria-current="page" href="#"><p className={styles.sidebar_links}>Events</p></Link>
                                    </li>
                                    <li className={`${styles.h4} nav-item ${styles.sidebar_links}`}>
                                        <Link className="nav-link active" href="#"><p className={styles.sidebar_links}>Login</p></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    );
}

export default Navbar;

