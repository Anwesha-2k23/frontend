// User registration form

import React from 'react'
import Link from 'next/link'

import styles from './style.module.css'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const host = process.env.NEXT_PUBLIC_HOST

const UserRegisterForm = () => {
    const [phone, setPhone] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cnfPassword, setCnfPassword] = React.useState('')
    const [passwordShown, setPasswordShown] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        // running user input validation
        if (name.length < 5) {
            toast.warning('Username is too small', {
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
        } else if (password !== cnfPassword) {
            toast.warning('Passwords do not match', {
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
        } else if (
            email
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) == null
        ) {
            toast.warning('Provide valid email address', {
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
        } else if (phone.match(/^[0-9]{10}$/) == null) {
            toast.warning('Provide valid phone number', {
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

        let body = {
            phone_number: phone,
            full_name: name,
            email_id: email,
            password: password,
        }
        try {
            const response = await fetch(`${host}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            //check if request is successful
            if (response.status === 201 || response.status === 200) {
                const data = await response.json()
                console.log(data)
                toast.success('Please check your email for verification', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            } else if (response.status === 409) {
                const data = await response.json()
                toast.error(data.message || 'Unable to register', {
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
            toast.error('Unable to register. check your internet connection', {
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
                    <h3>REGISTER</h3>
                    <hr />
                    <div className={styles.field}>
                        <label htmlFor="full_name">Full Name</label>
                        <br />
                        <input
                            type="text"
                            name="Full_Name"
                            placeholder="Eg: Vineet Kumar Singh"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br />
                    </div>
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
                        <label htmlFor="Phone_number">Phone Number</label>
                        <br />
                        <input
                            type="text"
                            name="Phone_Number"
                            placeholder="Eg: 9835486875"
                            required
                            maxLength="10"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <br />
                    </div>
                    <div className={styles.form_row}>
                        <div className={styles.field}>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                name="Password"
                                // placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="password">Confirm Password</label>
                            <br />
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                name="Password"
                                // placeholder="Confirm Password"
                                onChange={(e) => setCnfPassword(e.target.value)}
                                required
                            />
                            <br />
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                width: '20px',
                                height: '20px',
                                margin: '5px',
                            }}
                            onClick={() => {
                                setPasswordShown((prev) => !prev)
                            }}
                        />{' '}
                        Show Password
                    </div>

                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </motion.div>
                    <Link href="/userLogin">
                        Already have an account? Login here.
                    </Link>
                </motion.form>
            </div>
        </div>
    )
}

export default UserRegisterForm
