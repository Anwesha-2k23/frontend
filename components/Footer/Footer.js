import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icon_links}>
        <Link className={styles.icon_link} href=""> Facebook</Link>   {/* Facebook Link Here */}
        <Link className={styles.icon_link} href="">Instagram</Link>  {/* Instagram Link Here */}
        <Link className={styles.icon_link} href="">Youtube</Link> {/* Youtube Link Here */}
      </div>
      <div className={styles.footer_links}>
        <Link className={styles.footer_link} href="">Info</Link>
        <Link className={styles.footer_link} href="">Support</Link>
        <Link className={styles.footer_link} href="">Marketing</Link>
      </div>
      <div className={styles.tac_links}>
        <Link className={styles.tac_link} href="">Terms Of Use</Link>
        <Link className={styles.tac_link} href="">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer