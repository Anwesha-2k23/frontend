// User registration form

import React from 'react'
import Link from 'next/link'

import styles from './style.module.css'
import { motion, wrap } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { ColorRing } from 'react-loader-spinner'

const host = process.env.NEXT_PUBLIC_HOST

const UserRegisterForm = () => {
    const router = useRouter()
    const [phone, setPhone] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cnfPassword, setCnfPassword] = React.useState('')
    const [passwordShown, setPasswordShown] = React.useState(false)
    const [usertype, setUserType] = React.useState('iitp_student')
    const [college_name, setCollegeName] = React.useState('')
    const [newsletter, setNewsletter] = React.useState(true)
    const [terms, setTerms] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const handleChange = (e) => {
        setUserType(e.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('Email', email)
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbxjZQnFTF4rkZgSlA7IaVaMSoXdsqvt39LrUfaFtocPE-qkQWQhqItmXdyw-HvpACmA/exec'
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
        } else if (!terms) {
            toast.warning(
                'Please accept the terms and conditions to continue',
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
            return
        }

        let body = {
            phone_number: phone,
            full_name: name,
            email_id: email,
            password: password,
            user_type: usertype,
            college_name,
        }
        try {
            setLoading(true)
            if (newsletter) {
                let emailResponse = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData,
                })
                let emailData = await emailResponse.json()
                // console.log(emailData)
            }
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
                setLoading(false)
                toast.success(
                    'You are registered successfully. Please login to continue',
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
                router.push('/userLogin')
            } else if (response.status === 409) {
                const data = await response.json()
                setLoading(false)
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
                setLoading(false)
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
                    {/* <div className={styles.field}>
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
                    </div> */}
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        I am a student of IIT Patna{' '}
                        <input
                            type="checkbox"
                            style={{
                                width: '20px',
                                height: '20px',
                                margin: '5px',
                            }}
                            checked={usertype === 'iitp_student'}
                            onChange={() => {
                                setEmail('')
                                if (usertype === 'iitp_student') {
                                    setUserType('student')
                                } else {
                                    setUserType('iitp_student')
                                    setCollegeName('IIT Patna')
                                }
                            }}
                        />
                    </div>
                    {(() => {
                        switch (usertype) {
                            case 'iitp_student':
                                return (
                                    <div className={styles.field}>
                                        <label htmlFor="email_id">
                                            IITP Mail ID
                                        </label>
                                        <br />
                                        <input
                                            type="email"
                                            name="IITP_Mail_Id"
                                            onChange={(e) =>
                                                setEmail(
                                                    e.target.value +
                                                        '@iitp.ac.in'
                                                )
                                            }
                                            required
                                            placeholder="Eg: rishiraj_2001ME85"
                                            className={styles.iitp_email}
                                        />
                                        <span className={styles.iitp_email_ext}>
                                            @iitp.ac.in
                                        </span>
                                        <br />
                                    </div>
                                )
                            default:
                                return null
                        }
                    })()}
                    {usertype !== 'iitp_student' ? (
                        <div className={styles.field}>
                            <label>Select user type:</label>
                            <br />
                            <select
                                name="userType"
                                id="userType"
                                value={usertype}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="student">Student</option>
                                <option value="non-student">Non Student</option>
                                <option value="alumni">Alumni</option>
                                <option value="faculty">Faculty</option>
                            </select>
                        </div>
                    ) : null}
                    {usertype !== 'iitp_student' ? (
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
                    ) : null}
                    {usertype !== 'iitp_student' ? (
                        <div className={styles.field}>
                            <label htmlFor="college_name">
                                Institute/Organization Name:{' '}
                            </label>
                            <br />
                            <input
                                type="text"
                                name="college_name"
                                placeholder="Eg: NIT Patna"
                                value={
                                    usertype === 'iitp_student'
                                        ? 'IIT Patna'
                                        : college_name
                                }
                                disabled={usertype === 'iitp_student'}
                                onChange={(e) => setCollegeName(e.target.value)}
                                required
                            />
                        </div>
                    ) : null}
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

                    <div className={styles.terms_box}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <span>
                                Subscribe to the&nbsp;{' '}
                                <strong>Anwesha Dispatch</strong>{' '}
                                &nbsp;newsletter{' '}
                            </span>
                            <input
                                type="checkbox"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    margin: '5px',
                                }}
                                checked={newsletter}
                                onChange={() => {
                                    setNewsletter((prev) => !prev)
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: '5px',
                            }}
                        >
                            <span>
                                I accept the&nbsp;{' '}
                                <a href="/terms" target="_blank">
                                    Terms and Conditions
                                </a>{' '}
                            </span>
                            <input
                                type="checkbox"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    margin: '5px',
                                }}
                                checked={terms}
                                onChange={() => {
                                    setTerms((prev) => !prev)
                                }}
                            />
                        </div>
                    </div>

                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button onClick={(e) => handleSubmit(e)}>
                            {loading ? (
                                <ColorRing
                                    visible={true}
                                    height="50"
                                    width="50"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={[
                                        '#85F4FF',
                                        '#EFFFFD',
                                        '#85F4FF',
                                        '#EFFFFD',
                                        '#85F4FF',
                                    ]}
                                />
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </motion.div>
                    <Link href="/userLogin">
                        Already have an account? Login here.
                    </Link>
                    <Link href="https://forms.gle/LD4gSRg9CaxEeAXK7">
                        Trouble logging in? Reach out to us here.
                    </Link>
                </motion.form>
            </div>
        </div>
    )
}

export default UserRegisterForm
