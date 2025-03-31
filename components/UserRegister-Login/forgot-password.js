import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../authContext'
import 'react-toastify/dist/ReactToastify.css'

const host = process.env.NEXT_PUBLIC_HOST

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const ForgotPassword = () => {
    const context = useContext(AuthContext)
    const [email, setEmail] = React.useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        let body = { email: email }
        // user input validation
        if (email.length == 0) {
            toast.warning('Please fill email', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
            return
        }
        try {
            const response = await fetch(`${host}/user/forgetpassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                credentials: 'include',
            })

            //check if request is successful
            // console.log(response.status)
            if (response.status === 200 || response.status === 201) {
                toast.success(
                    'Please check your email for the password reset link. Make sure to check the spam folder as well.',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    }
                )
            } else if (response.status === 409) {
                const data = await response.json()
                toast.error(data.message || 'Unable to reset password', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            } else {
                const data = await response.json()
                toast.error(data.message, {
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
        } catch (err) {
            console.log(err)
            toast.error(
                'Password reset failed. Check your internet connection',
                {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                }
            )
        }
    }

    return (
        <div>
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

            <motion.form
                initial={{ opacity: 0, x: '-20%' }}
                whileInView={{ opacity: 1, x: '0%' }}
                transition={{ duration: 1 }}
            >
                <div className={styles.container}>
                    <div className={styles.form}>
                        <h2
                            style={{
                                fontSize: '2rem',
                                fontFamily: 'Anavio Small Capitals W01 Bold',
                                margin: ' -1rem 0 2rem 0',
                                textAlign: 'center',
                            }}
                        >
                            Password Reset
                        </h2>
                        <div className={styles.field}>
                            <label htmlFor="email_id">Email ID</label>
                            <br />
                            <input
                                type="email"
                                name="Email_Id"
                                placeholder="Eg: vineet@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <br />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Link
                                    href="/userLogin"
                                    style={{
                                        color: '#ffffff',
                                        fontSize: '0.8rem',
                                        marginBottom: 15,
                                        textAlign: 'center',
                                    }}
                                >
                                    Login Here
                                </Link>
                            </div>
                        </div>
                        {/* <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <button className={styles.fancyButton}>
                                <span>SUBMIT</span>
                                <Image
                                    src={'/assets/Subtract.svg'}
                                    className={styles.memberImage}
                                    height={220}
                                    width={220}
                                    alt="register"
                                />
                            </button>
                        </motion.div> */}

                        <div className={styles.hero_button}>
                            <button
                                className={cn(
                                    styles.sexy_button,
                                    styles.sexy_button_small
                                )}
                                onClick={handleSubmit}
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </motion.form>
        </div>
    )
}

export default ForgotPassword
