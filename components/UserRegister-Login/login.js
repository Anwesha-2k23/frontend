import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../authContext'
import 'react-toastify/dist/ReactToastify.css'

const host = process.env.NEXT_PUBLIC_HOST

const UserLoginForm = () => {
    const context = useContext(AuthContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordShown, setPasswordShown] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let body = { username: email, password: password }
        // user input validation
        if (email.length == 0 || password.length == 0) {
            toast.warning('Please fill email and password', {
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
            const response = await fetch(`${host}/user/login`, {
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
                const data = await response.json()
                if (data.success === true) {
                    toast.success('You are successfully logged in', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    })
                    context.getUser()
                } else {
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
            } else if (response.status === 409) {
                const data = await response.json()
                toast.error(data.message || 'Unable to login', {
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
            toast.error('Login failed. Check your internet connection', {
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
    }

    return (
        <div
            style={{
                position: 'relative',
                marginTop: '120px',
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
            <img
                className={styles.island}
                alt="floating-island-iitp"
                src="/assets/floating-island.svg"
            />

            <div className={styles.form}>
                <motion.form
                    className={styles.mainForm}
                    initial={{ opacity: 0, x: '100%' }}
                    whileInView={{ opacity: 1, x: '-2%' }}
                    transition={{ duration: 1 }}
                >
                    <h3>LOGIN</h3>
                    <hr />
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

                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            id="pwd"
                            name="Password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />

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
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <input
                                type="checkbox"
                                id="showPassword"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    margin: '5px',
                                }}
                                onChange={() => {
                                    setPasswordShown((prev) => !prev)
                                }}
                            />
                            Show Password
                        </span>
                        <br />
                        <Link href="/password-reset" className={styles.forgotpass}>
                            Forgot password?
                        </Link>
                    </div>
                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                    </motion.div>
                    <Link href="/userRegister">
                        Don't have an account? Register here.
                    </Link>
                </motion.form>
            </div>
        </div>
    )
}

export default UserLoginForm
