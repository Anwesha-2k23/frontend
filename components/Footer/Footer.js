import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={[styles.icon_links, styles.linkGroup].join(" ")}>
        <Link className={[styles.icon_link, styles.link].join(" ")} href=""> Facebook</Link>   {/* Facebook Link Here */}
        <Link className={[styles.icon_link, styles.link].join(" ")} href="">Instagram</Link>  {/* Instagram Link Here */}
        <Link className={[styles.icon_link, styles.link].join(" ")} href="">Youtube</Link>  {/* Youtube Link Here */}
      </div>
      <hr className={styles.footerSeperator}/>
      <div className={[styles.footer_links, styles.linkGroup].join(" ")}>
        <Link className={[styles.footer_link, styles.link].join(" ")} href="">Info</Link>
        <Link className={[styles.footer_link, styles.link].join(" ")} href="">Support</Link>
        <Link className={[styles.footer_link, styles.link].join(" ")} href="">Marketing</Link>
      </div>
      <hr className={styles.footerSeperator}/>
      <div className={[styles.tac_links, styles.linkGroup].join(" ")}>
        <Link className={[styles.tac_link, styles.link].join(" ")} href="">Terms Of Use</Link>
        <Link className={[styles.tac_link, styles.link].join(" ")} href="">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer