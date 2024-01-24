import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../authContext'
import 'react-toastify/dist/ReactToastify.css'

const host = process.env.NEXT_PUBLIC_HOST

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
        <div
            style={{
                overflow: 'hidden',
            }}
        >
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


            <div className={styles.form}>
                <motion.form
                    className={styles.mainForm}
                    initial={{ opacity: 0, x: '-20%' }}
                    whileInView={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 1 }}
                >
                    <h2 style={{ letterSpacing: 1, fontSize: 30 }}>Password Reset</h2>
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
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Link href="/userLogin" style={{ color: '#ffffff', fontWeight: 600 }}>
                                Login Here
                            </Link>
                        </div>
                    </div>
                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button type="submit" onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                    </motion.div>
                </motion.form>
            </div>
        </div>
    )
}

export default ForgotPassword
