import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '../styles/contact.module.css'
import { ToastContainer, toast } from 'react-toastify'
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const form = useRef()

    const resetForm = () => {
        form.current.reset()
    }

    const Notify = () => {
        toast.success('Message sent successfully!')
    }
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_3ngn78q',
                'template_w3widbd',
                form.current,
                'NDeri4iyFqfZH9rNw'
            )
            .then(
                (result) => {
                    resetForm({ name: '' })
                    toast.success('Message sent successfully!')
                },
                (error) => {
                    console.log(error.text)
                    toast.error('Error sending message. Please try again later')
                }
            )
    }

    return (
        <div className={styles.maincontainer}>
            <div className={styles.effectContainer}>
                <div className={styles.container}>
                    <div className={styles.leftcontainer}>
                        <div className={styles.leftinnercontainer}>
                            <div className={styles.titleBox}>
                                <div className={styles.title}>Contact Us</div>
                                <div className={styles.description}>
                                    Not sure about something? The team at Anwesha,
                                    IIT Patna is here to listen and help you out.
                                </div>
                            </div>

                            <div className={styles.email}>
                                <img src="/email_icon.svg" alt="" />
                                <div className={styles.emailtext}>
                                    anweshatroubleshoot@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.rightinnercontainer}>
                            <div className={styles.formtitlebox}>
                                <div className={styles.formtitle}>
                                    We'd Love to Hear from You!
                                </div>
                                <div className={styles.formdescription}>
                                    Fill out the form below
                                </div>
                            </div>

                            {/*<div
                                ref={form}
                                onSubmit={sendEmail}
                                className={styles.forms}
                            >
                                {<div className={styles.namebox}>
                                <label className={styles.texts}>Name</label>
                                <div className={styles.nameinput}>
                                    <input
                                        className={styles.inputs}
                                        type="text"
                                        name="user_name"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div className={styles.emailandnumberbox}>
                                <div className={styles.emailbox}>
                                    <label className={styles.texts}>
                                        Email ID
                                    </label>
                                    <div className={styles.emailinput}>
                                    <input
                                        className={styles.inputs}
                                        type="email"
                                        placeholder="Enter your email address"
                                        name="user_email"
                                    />
                                    </div>
                                </div>
                                <div className={styles.numberbox}>
                                    <label className={styles.texts}>
                                        Phone Number
                                    </label>
                                    <div className={styles.numberinput}>
                                        <input
                                            className={styles.inputs}
                                            type="text"
                                            placeholder="Enter your phone number"
                                            name="user_number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.messagebox}>
                                <label className={styles.texts}>Message</label>
                                <div className={styles.messageinput}>
                                    <textarea
                                        className={styles.inputs}
                                        name="message"
                                        placeholder='Type your message here'
                                    />
                                </div>
                            </div> */}
                            <div className={styles.buttonbox}>
                                <input
                                    className={styles.button}
                                    type="button"
                                    onClick={() => window.open("https://forms.gle/MVtBKRRqqWEtkFag7", "_blank")}
                                    value="Google Form"
                                />
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact
