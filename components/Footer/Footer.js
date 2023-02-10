import Link from 'next/link'
import styles from './Footer.module.css'
import Image from "next/image";

const Footer = () => {
  return (
      <div className={styles.footer}>
          <div className={[styles.mainSection].join(' ')}>
              <div className={[styles.section3].join(' ')}>
                  <Link href="/" className={styles.anwesha_text}>
                      <img
                          src="/Anwesha_text.png"
                          alt="Anwesha"
                          className={styles.anwesha_text_img}
                      />
                  </Link>
                  <div
                      className={[styles.icon_links, styles.linkGroup].join(
                          ' '
                      )}
                  >
                      <Link
                          className={[styles.icon_link, styles.link].join(' ')}
                          href="https://www.facebook.com/anwesha.iitpatna/"
                      >
                          <img src="/footer/facebook.svg"/>
                      </Link>{' '}
                      <Link
                          className={[styles.icon_link, styles.link].join(' ')}
                          href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
                      >
                          <img src="/footer/instagram.svg"/>
                      </Link>
                      <Link
                          className={[styles.icon_link, styles.link].join(' ')}
                          href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
                      >
                          <img src="/footer/youtube.svg"/>
                      </Link>{' '}
                      <Link
                          className={[styles.icon_link, styles.link].join(' ')}
                          href="https://twitter.com/anweshaiitpat/"
                      >
                          <img src="/footer/twitter.svg"/>
                      </Link>{' '}
                  </div>
                  {/* <div
                      className={[
                          styles.button_links,
                          styles.linkGroup,
                          styles.googlePlayButton,
                      ].join(' ')}
                  >
                      <a href="">
                          <img
                              alt="Get it on Google Play"
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          />
                      </a>
                  </div> */}
              </div>
                  <img className={styles.frame_img} src="/assets/frame.svg"/>
              {/* <div className={[styles.sectionSeperator].join(' ')}></div> */}
              <div className={[styles.section1].join(' ')}>
                  <a href="mailto:anweshaiitp@gmail.com">
                  <img src="/footer/mail.svg"/>{' '}
                      <span>
                          anweshaiitp@gmail.com
                      </span>
                  </a>
                  <a  href="tel:+917907323522"><img src="/footer/phone.svg"/> <span>+91 79073 23522 </span></a>
                  <a href="https://goo.gl/maps/g8QCu3qN2DhuM2W49">
                  <img src="/footer/location.svg"/><div>Anwesha Office,<br/>Indian Institute of Technology
                      Patna,<br/>Bihta, Patna - 801 103</div>
                  </a>
              </div>
          </div>
          {/* <div className={[styles.footerSeperator].join(' ')}>svsdf</div> */}
      </div>
  )
}

export default Footer
