import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css'
var validator = require('email-validator')

const Footer = () => {
    const [email, setEmail] = useState('')
    useEffect(() => {
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbw51WVpKO2DRiLvCG7GMr-CvlI3pSMXNe2WlGlwLCwTisYKxLysZ0lVeR-qwbId_VE1/exec'
        const scriptURL =
            'https://script.google.com/macros/s/AKfycby-IHPwPAe6nM854aqDwsK8Ln2hAWB3B_HsmCwXBxHH-deaosldviJ0ADrnNxHFAS89/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            if (validator.validate(document.getElementById('email').value)) {
                toast.success('You are subscribed to our newsletter', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
                let a = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form),
                })
                let b = await a.json()
                // console.log(b)
                setEmail('')
                if (b.result != 'success') {
                    toast.error('Failed to subscribe the newsletter', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    })
                }
            } else {
                toast.warning('Check your email once again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            }

            // .then(response => console.log('Success!', response))
            // .catch(error => console.error('Error!', error.message))
        })
    }, [])

    const handleChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    return (
        <div className={styles.footer}>
            <div className={[styles.mainSection].join(' ')}>
                <div className={[styles.section3].join(' ')}>
                    <div className={styles.footerTable}>
                        <div className={styles.footerTableRow}>
                            <Link className={styles.footerLink} href="/">
                                <div className={styles.footerTableCell}>
                                    Home
                                </div>
                            </Link>
                            <Link className={styles.footerLink} href="/events">
                                <div className={styles.footerTableCell}>
                                    Events
                                </div>
                            </Link>
                            <Link
                                className={styles.footerLink}
                                href="/sponsors"
                            >
                                <div className={styles.footerTableCell}>
                                    Sponsors
                                </div>
                            </Link>
                        </div>
                        <div className={styles.footerTableRow}>
                            <Link className={styles.footerLink} href="/profile">
                                <div className={styles.footerTableCell}>
                                    Profile
                                </div>
                            </Link>
                            <Link className={styles.footerLink} href="/aboutus">
                                <div className={styles.footerTableCell}>
                                    About Us
                                </div>
                            </Link>
                            <Link className={styles.footerLink} href="/team">
                                <div className={styles.footerTableCell}>
                                    Team
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={[styles.icon_links, styles.linkGroup].join(
                            ' '
                        )}
                    >
                        <Link
                            className={[styles.icon_link, styles.link].join(
                                ' '
                            )}
                            href="mailto:anweshaiitp@gmail.com"
                        >
                            <img src="/footer/gmail.svg" />
                        </Link>
                        <Link
                            className={[styles.icon_link, styles.link].join(
                                ' '
                            )}
                            href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
                        >
                            <img src="/footer/instagram.svg" />
                        </Link>
                        <Link
                            className={[styles.icon_link, styles.link].join(
                                ' '
                            )}
                            href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
                        >
                            <img src="/footer/youtube.svg" />
                        </Link>
                        <Link
                            className={[styles.icon_link, styles.link].join(
                                ' '
                            )}
                            href="https://www.facebook.com/anwesha.iitpatna/"
                        >
                            <img src="/footer/facebook.svg" />
                        </Link>
                        <Link
                            className={[styles.icon_link, styles.link].join(
                                ' '
                            )}
                            href="https://twitter.com/anweshaiitpat/"
                        >
                            <img src="/footer/twitter.svg" />
                        </Link>
                    </div>
                </div>
                <div className={styles.middle_container}>
                    <img className={styles.frame_img} src="/Anwesha_text.png" />
                    <span className={styles.newsletter}>
                        Subscribe to our Mailing list
                    </span>
                    <form className={styles.form} name="submit-to-google-sheet">
                        <input
                            placeholder="Anwesha Dispatch"
                            onChange={handleChange}
                            value={email}
                            type="email"
                            name="mailing"
                            id="email"
                            className={styles.mailInput}
                        />
                        {/* <button
                            className={styles.nlnewbtn}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                        >
                            Subscribe
                        </button> */}
                    </form>
                    <div className={styles.termsPrivacy}>
                        <Link href="/privacy" className={styles.privacy_text}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={styles.terms_text}>
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
                {/* <div className={[styles.sectionSeperator].join(' ')}></div> */}

                <div className={[styles.section1].join(' ')}>
                    {/* <a href="https://goo.gl/maps/g8QCu3qN2DhuM2W49"> */}
                    {/* <img src="/footer/location.svg" /> */}
                    <div className={styles.a}>
                        <div className={styles.address}>
                            Anwesha Office,
                            <br />
                            Indian Institute of Technology Patna,
                            <br />
                            Bihta, Patna - 801 103
                            <br />
                            <a href="tel:+917907323522">+91 7907323522</a>
                        </div>
                    </div>
                    <div
                        className={[
                            styles.button_links,
                            styles.linkGroup,
                            styles.googlePlayButton,
                        ].join(' ')}
                    >
                        <a href="#">
                            {/* <img
                              alt="Get it on Google Play"
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          /> */}
                          <div>Download the Anwesha'23 app now</div>
                            <Image
                                alt="google play icon"
                                src={'/footer/googlePlay.svg'}
                                width={250}
                                height={250}
                            ></Image>
                        </a>
                    </div>
                    {/* </a> */}
                </div>
            </div>
            {/* <div className={[styles.footerSeperator].join(' ')}>svsdf</div> */}
        </div>
    )
}

export default Footer
