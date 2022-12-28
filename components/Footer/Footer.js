import Link from 'next/link'
import styles from './Footer.module.css'
import Image from "next/image";
import { faceBookSVG, InstagramSVG, YouTubeSVG, TwitterSVG } from './svgs'


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={[styles.mainSection].join(" ")}>
        <div className={[styles.section3].join(" ")}>
          {/* <div className={[styles.section3maintext].join(" ")}>Anwesha</div>
           */}
          <div className={styles.anwesha_text}>
            <img src="/Anwesha_text.png" alt="Anwesha" className={styles.anwesha_text_img} />
            {/* <h1 className={styles.bgText}>COMING SOON...</h1> */}
          </div>
          {/* <p className={[styles.section3text].join(" ")}>Lorem sed do eius</p> */}
          <div className={[styles.icon_links, styles.linkGroup].join(" ")}>
            {/* <div> */}
            <Link className={[styles.icon_link, styles.link].join(" ")}
              href="https://www.facebook.com/anwesha.iitpatna/">{faceBookSVG}</Link> {/* Facebook Link Here */}
            <Link className={[styles.icon_link, styles.link].join(" ")} href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y=">{InstagramSVG}</Link>
            {/* </div> Instagram Link Here */}
            {/* <div> */}
            <Link className={[styles.icon_link, styles.link].join(" ")} href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur">{YouTubeSVG}</Link>  {/* Youtube Link Here */}
            <Link className={[styles.icon_link, styles.link].join(" ")}
              href="https://twitter.com/anweshaiitpat/">{TwitterSVG}</Link>  {/* Youtube Link Here */}
            {/* </div> */}
          </div>
          <div className={[styles.button_links, styles.linkGroup,styles.googlePlayButton].join(" ")}>
            {/* <div> */}
            <a href=""><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
          </div>
        </div>

        <div className={[styles.sectionSeperator].join(" ")}></div>
        <div className={[styles.section2].join(" ")}>
          <Link className={[styles.footer_link, styles.link].join(" ")} href="">Home</Link>
          <Link className={[styles.footer_link, styles.link].join(" ")} href="">Multicity</Link>
          <Link className={[styles.footer_link, styles.link].join(" ")} href="">Campus Ambassador</Link>
          <Link className={[styles.footer_link, styles.link].join(" ")} href="">About</Link>
          <Link className={[styles.footer_link, styles.link].join(" ")} href="">Contact</Link>
        </div>
        <div className={[styles.sectionSeperator].join(" ")}></div>
        <div className={[styles.section1].join(" ")}>
          <h4>Email : <a href="">anweshaiitp@gmail.com</a></h4>
          <h4>Phone : +91 7907323522 </h4>
          <h4>Address : Anwesha Office,
            Indian Institute of Technology Patna,
            Bihta,
            Patna - 801 103</h4>
        </div>
      </div>
      <div className={[styles.footerSeperator].join(" ")}>svsdf</div>
    </div >
  )
}

export default Footer
