import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/comingsoon.module.css'
import { motion } from 'framer-motion'
var validator = require('email-validator')


export default function comingsoon() {
    const [email, setEmail] = useState('')
    useEffect(() => {
        // const scriptURL = 'https://script.google.com/macros/s/AKfycbw51WVpKO2DRiLvCG7GMr-CvlI3pSMXNe2WlGlwLCwTisYKxLysZ0lVeR-qwbId_VE1/exec'
        const scriptURL =
            'https://script.google.com/macros/s/AKfycby-IHPwPAe6nM854aqDwsK8Ln2hAWB3B_HsmCwXBxHH-deaosldviJ0ADrnNxHFAS89/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            console.log(document.getElementById('email').value)
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
                console.log(b)
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
    }

    return (
        <div className={styles.comingsoon_body}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Head>
                <title>Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./AnwehsaIcon.png" />
            </Head>


            {/* <div className={styles.socials}>
                <div className={styles.imageElement}>
                    <Link
                        href="https://instagram.com/anwesha.iitp?igshid=YmMyMTA2M2Y="
                        target="_blank"
                    >
                        <Image src="/instagram.svg" width={40} height={40} />
                    </Link>
                </div>
                <div className={styles.imageElement}>
                    <Link
                        href="https://m.youtube.com/@AnweshaIITP?itct=CBgQq6cCIhMIv5uekI6m-wIVKcmgAh3FlAur"
                        target="_blank"
                    >
                        <Image src="/youtube.svg" width={40} height={40} />
                    </Link>
                </div>
                <div className={styles.imageElement}>
                    <Link
                        href="https://twitter.com/anweshaiitpat"
                        target="_blank"
                    >
                        <Image src="/twitter.svg" width={40} height={40} />
                    </Link>
                </div>
                <div className={styles.imageElement}>
                    <Link
                        href="https://www.facebook.com/anwesha.iitpatna/"
                        target="_blank"
                    >
                        <Image src="/facebook.svg" width={40} height={40} />
                    </Link>
                </div>
            </div> */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.anwesha_bg_img}
            >
                <div className={styles.container}>
                    <Image src="/A_logo.png" width={400} height={400} />

                    <div className={styles.text}>
                        <p style={{ marginBottom: 10, paddingRight: 5 }}>
                            <span
                                className={styles.anweshaText}
                                style={{ color: '#660101' }}
                            >
                                Anwesha
                            </span>
                            <span
                                className={styles.anweshaText}
                                style={{ color: '#CB4846' }}
                            >
                                {' '}
                                ‘23{' '}
                            </span>
                        </p>
                        <p className={styles.iitp}>IIT PATNA</p>
                    </div>
                </div>
            </motion.div>

            {/* Campus Ambassador */}
            <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                whileInView={{ opacity: 1, x: '0%' }}
                transition={{ duration: 1 }}
                className={styles.ca}
            >
                <Link href="/campusambassador">
                    <div className={styles.ca_poster}></div>
                </Link>
                <div className={styles.ca_info}>
                    <Link href="/campusambassador">
                        <h1 className={styles.ca_heading}>
                            Campus Ambassador Programme
                        </h1>
                    </Link>
                    <p className={styles.ca_text}>
                        The wait is over! Anwesha is here with it's Campus Ambassador Programme. Don't miss this amazing opportunity to associate and work with the biggest festival of North East India.
                    </p>
                    <Link href="/ca-register">
                        <button className={styles.ca_button}>
                            Register Now!
                        </button>
                    </Link>
                </div>
            </motion.div>
            <div className={styles.nlsection}>
    <div className={styles.nlwriteup}>
        <img src="/assets/logo-casual.png"/>
        <h1>Anwesha Dispatch</h1>
        <h2>Stay connected with Anwesha</h2>
        <span>Did you hear that Anwesha's back? Yes, we're as excited as you are, and can't wait to share everything about everything here at Anwesha.</span>
        <br/>
        <span>If you're someone who finds it difficult to catch up on the latest updates on various platforms, sign up for our very own mailing list and get all your updates right to your inbox.</span>
    </div>
    <div className={styles.nlnew}>
        <img className={styles.nllaptop} src="/assets/newsletter-laptop.png"/>
        <img className={styles.nlmail} src="/assets/newsletter-mail.png"/>
        <div>Drop down your email address and subscribe to our mailing list below!</div>
        <form className={styles.form} name="submit-to-google-sheet">
                        <input
                            onChange={handleChange}
                            type="email"
                            value={email}
                            name="Email"
                            id="email"
                            placeholder="Your Email"
                            className={styles.nlnewform_control}
                        />
                        <motion.button
                            className={styles.nlnewbtn}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                        >
                            Subscribe
                        </motion.button>
                        {/* <motion.div className={styles.btn} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
              <button type="submit">Submit</button>
          </motion.div> */}
        </form>
    </div>
    </div>


            {/* <script>
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
      </script> */}

            {/* <Footer/> */}
        </div>
    )
}
