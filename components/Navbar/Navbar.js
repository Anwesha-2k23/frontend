import Link from 'next/link'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Anwesha 2023</h1>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/multicity">
          Multicity
        </Link>
        <Link className={styles.link} href="/campus-ambassador">
          Campus Ambassadors
        </Link>
        {/* <Link className={styles.link} href="/">
          About
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar