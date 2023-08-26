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
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbxjZQnFTF4rkZgSlA7IaVaMSoXdsqvt39LrUfaFtocPE-qkQWQhqItmXdyw-HvpACmA/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            console.log(new FormData(form))
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
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form),
                })
                const data = await response.json()
                console.log(data)
                // .then(response => console.log('Success!', response))
                // .catch(error => console.error('Error!', error.message))
                setEmail('')
                if (data.result != 'success') {
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
    }
    return (
        <div className={styles.footer}>
            <div className={styles.mainSection}>
                <div className={styles.sectionLeft}>
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
                                href="/oursponsors"
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
                            <Link className={styles.footerLink} href="/ourteam">
                                <div className={styles.footerTableCell}>
                                    Team
                                </div>
                            </Link>
                            {/* <Link
                                className={styles.footerLink}
                                href="https://forms.gle/LD4gSRg9CaxEeAXK7"
                                target="_blank"
                            >
                                <div className={styles.footerTableCell}>
                                    Report issue
                                </div>
                            </Link> */}
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

                <div className={styles.sectionMiddle}>
                    <img
                        className={styles.frame_img}
                        src="/footer/Anwesha_Text_Footer.svg"
                    />
                    <span className={styles.newsletter}>
                        Subscribe to our Mailing list
                    </span>
                    <form className={styles.form} name="submit-to-google-sheet">
                        <input
                            placeholder="Anwesha Dispatch"
                            onChange={handleChange}
                            value={email}
                            type="email"
                            name="Email"
                            id="email"
                            className={styles.mailInput}
                        />
                        {/* <button
                            className={styles.nlnewbtn}
                            type="submit"
                        > */}
                        {/* Subscribe */}
                        <input
                            type="image"
                            alt="submit"
                            name="submit"
                            style={{
                                height: '40px',
                                filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)',
                            }}
                            src="/footer/newsletter.svg"
                        />
                        {/* </button> */}
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

                <div className={styles.sectionRight}>
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
                        <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.college.anwesha2k23"
                        >
                            {/* <img
                              alt="Get it on Google Play"
                              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          /> */}
                            {/* <div>Download the Anwesha'23 app now</div> */}
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
        </div>
    )
}

export default Footer
