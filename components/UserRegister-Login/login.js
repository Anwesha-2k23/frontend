import React, { useContext, useEffect } from 'react'
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
                    <h1 style={{ letterSpacing: 1 }}>LOGIN</h1>
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
                        className={styles.passwd_box}
                    >
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: -15,
                            }}
                        >
                            <input
                                type="checkbox"
                                id="showPassword"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '7px',
                                    marginTop: '3px',
                                }}
                                onChange={() => {
                                    setPasswordShown((prev) => !prev)
                                }}
                            />
                            Show Password
                        </span>
                        &nbsp;&nbsp;<Link
                            href="/password-reset"
                            style={{
                                color: '#ffffff', fontWeight: 600,
                                marginTop: -15,
                            }}
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button type="submit" onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                    </motion.div>
					<br />
					<p style={{ textAlign: "center", fontWeight: "700" }}>
                        If registered on the Slick app,&nbsp;
                        <Link
                            href="/userLogin"
                            style={{ color: '#ffffff', fontWeight: 600 }}
                        >
                            Login
                        </Link>
						&nbsp;using email address
                        as both the username and password &nbsp;
                    </p>
                    <p style={{ marginTop: 18, textAlign: "center" }}>
						Don't have an account? &nbsp;
                        <Link href="/userRegister" style={{ color: '#ffffff', fontWeight: 600 }}>
                            Register here.
                        </Link>
                    </p>
                    <p style={{ marginTop: 18, textAlign: "center" }}>
                        Trouble logging in? &nbsp;
                        <Link href="https://forms.gle/LD4gSRg9CaxEeAXK7" style={{ color: '#ffffff', fontWeight: 600 }}>
                            Reach out to us here.
                        </Link>
                    </p>
                </motion.form>
            </div>

        </div>
    )
}

export default UserLoginForm
