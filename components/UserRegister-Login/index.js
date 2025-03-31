// User registration form

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './style.module.css'
import { motion, wrap } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { ColorRing } from 'react-loader-spinner'
import details from '../prof_staff_details'

const host = process.env.NEXT_PUBLIC_HOST

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const UserRegisterForm = () => {
    const router = useRouter()
    const [phone, setPhone] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [college, setCollege] = React.useState('')
    const [cnfPassword, setCnfPassword] = React.useState('')
    const [passwordShown, setPasswordShown] = React.useState(false)
    const [usertype, setUserType] = React.useState('student')
    const [college_name, setCollegeName] = React.useState('')
    const [newsletter, setNewsletter] = React.useState(true)
    const [terms, setTerms] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [messageshowed, setmessageshowed] = React.useState(false);


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
        } else if (usertype === 'iitp_student' && email.match(/\dres\d/)) {
            toast.error('online iitp students are under type - student ', {
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
        let isproff = ''
        for (let i = 0; i < details.length; i++) {
            if (details[i].webmail === email) {
                // setUserType('faculty')
                isproff = 'faculty'
                setCollegeName('IIT Patna')
            }
        }
        let body = {
            phone_number: phone,
            full_name: name,
            email_id: email.toLowerCase(),
            password: password,
            user_type: isproff ? isproff : usertype,
            college_name: usertype == 'iitp_student' ? 'IIT Patna' : college_name,
        }
        try {
            setLoading(true)
            if (newsletter) {
                let emailResponse = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData,
                })
                let emailData = await emailResponse.json()
            }
            const response = await fetch(`${host}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            //check if request is successful
            console.log(response.status)
            console.log(response)
            if (response.status === 201 || response.status === 200) {
                const data = await response.json()
                setLoading(false)
                toast.success('Registered Successfully, You can Login now', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
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
                        <div
                            style={{
                                fontSize: '2rem',
                                fontFamily: 'Anavio Small Capitals W01 Bold',
                                margin: ' 0 0 2.5rem 0',
                                textAlign: 'center',
                            }}
                        >
                            Create Your Account

                            <p style={{ fontSize: '0.9rem', color: 'white', marginTop:'5px', textShadow: '0px 0px 5px rgba(255, 255, 255, 0.7)'
 }}> 
                                Non IITP Students register by their personal email
                            </p>

                        </div>

                        <div className={styles.field}>
                            <label htmlFor="full_name"> Name</label>
                            <br />
                            <input
                                type="text"
                                name="Full_Name"
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <br />
                        </div>

                        <div className={styles.field}>
                            <label>Select user type:</label>
                            <br />
                            <select
                                name="userType"
                                id="userType"
                                value={usertype}
                                onChange={(e) => {
                                    const selectedType = e.target.value
                                    setUserType(selectedType)

                                    // Reset the email if switching to 'iitp_student'
                                    if (selectedType === 'iitp_student') {
                                        setEmail('')
                                        setCollegeName('IIT Patna')
                                    } else {
                                        setCollegeName('')
                                    }
                                }}
                                required
                                style={{
                                    color: 'white',
                                    padding: '0px 20px', // Add padding for better readability
                                }}
                            >
                                <option value="iitp_student">
                                    IITP Student
                                </option>
                                <option value="student">Student</option>
                                <option value="non-student">Non-Student</option>
                                <option value="alumni">Alumni</option>
                                <option value="faculty">Faculty</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email_id">Email ID</label>
                            <br />
                            <input
                                type="email"
                                name="Email_Id"
                                placeholder={
                                    usertype === 'iitp_student'
                                        ? 'Eg: 2001me85_rishiraj'
                                        : 'Eg: vineet@gmail.com'
                                }
                                onChange={(e) => {
                                    if (usertype === 'iitp_student') {
                                        setEmail(
                                            e.target.value.toLowerCase() +
                                            '@iitp.ac.in'
                                        )
                                    } else {
                                        setEmail(e.target.value)
                                    }
                                }}
                                required
                                value={
                                    usertype === 'iitp_student' && email
                                        ? email.replace('@iitp.ac.in', '') // Show only the prefix for IITP
                                        : email
                                }
                            />
                            {usertype === 'iitp_student' && (
                                <span className={styles.iitp_email_ext}>
                                    @iitp.ac.in
                                </span>
                            )}
                        </div>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label htmlFor="password">Password</label>
                                <br />
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    name="Password"
                                    placeholder="Create a password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <br />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="password">
                                    Confirm Password
                                </label>
                                <br />
                                <input
                                    type={passwordShown ? 'text' : 'password'}
                                    name="Password"
                                    placeholder="Confirm your Password"
                                    onChange={(e) =>
                                        setCnfPassword(e.target.value)
                                    }
                                    required
                                />
                                <br />
                            </div>
                        </div>
                        <br />
                        <div className={styles.row}>
                            {/* <div className={styles.field}>
                                <label htmlFor="email_id">Email ID</label>
                                <br />
                                <input
                                    type="email"
                                    name="Email_Id"
                                    placeholder="Enter your email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <br />
                            </div> */}
                            <div className={styles.field}>
                                <label htmlFor="Phone_number">
                                    Phone Number
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="Phone_Number"
                                    placeholder="Enter your phone number"
                                    required
                                    maxLength="10"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <br />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="College">College</label>
                                <br />
                                {college_name === 'IIT Patna' ? (
                                    <input
                                        name="College"
                                        value="IIT Patna"
                                        readOnly
                                    />
                                ) : (
                                    <input
                                        name="College"
                                        placeholder="Enter your College name"
                                        value={college_name}
                                        onChange={(e) =>
                                            setCollegeName(e.target.value)
                                        }
                                        required
                                    />
                                )}
                                <br />
                            </div>
                        </div>
                        {/* <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <button className={styles.fancyButton} onClick={handleSubmit}>
                                <span>{!loading ? "REGISTER" : "REGISTERING.."}</span>
                                <Image
                                    src={'/assets/Subtract.svg'}
                                    height={220}
                                    width={220}
                                    alt="register"
                                />
                            </button>
                        </motion.div>{' '}
                        <br /> */}
                        <div className={styles.hero_button}>
                            <button
                                onClick={handleSubmit}
                                className={cn(
                                    styles.sexy_button,
                                    styles.sexy_button_small
                                )}
                            >
                                {!loading ? 'REGISTER' : 'REGISTERING..'}
                            </button>
                        </div>
                        <br />
                        <p
                            style={{
                                marginTop: 18,
                                textAlign: 'center',
                                fontSize: '0.8rem',
                            }}
                        >
                            Already registered? &nbsp;
                            <Link
                                href="/userLogin"
                                style={{ color: '#ffffff', fontWeight: 600 }}
                            >
                                Login here.
                            </Link>
                        </p>
                        <br />
                    </div>
                </div>
            </motion.form>
        </div>
    )
}

export default UserRegisterForm
