import React, {useContext} from 'react'
import Link from 'next/link'
import styles from './style.module.css'
import { motion } from 'framer-motion'
import GreetingLottie from '../displaylottie'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../authContext'
import 'react-toastify/dist/ReactToastify.css'
import Router from 'next/router'
// const host = 'https://backend.anwesha.live'
const host = process.env.NEXT_PUBLIC_HOST

const UserLoginForm = () => {
    const context = useContext(AuthContext);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [failure, setFailure] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        let body = { username: email, password: password }
        try {
            const response = await fetch(`${host}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                credentials: 'include',
            })
            console.log(response)

            //check if request is successful
            if (response.status === 200) {
                setSuccess(true)
                setFailure(false)
                setErrorMsg('')
                const data = await response.json()
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
            } else if (response.status === 409) {
                const data = await response.json()
                setErrorMsg(data.message)
                setFailure(true)
                setSuccess(false)
                toast.error('Unable to login', {
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
                console.log(data.message)
                setErrorMsg(
                    'Internal Server Error. Check your browser console for more details'
                )
                setFailure(true)
                setSuccess(false)
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
        }
    }

    return (
        <div style={{position: 'relative', marginTop: '120px', overflow: 'hidden'}}>
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
            <img className={styles.island} alt="floating-island-iitp" src="/assets/floating-island.svg"/>
            <img className={styles.clouds} alt="clouds" src="/assets/clouds.svg"/>
            {/* <motion.h1
                className={styles.mainHeading}
                initial={{ opacity: 0, y: '-100%' }}
                whileInView={{ opacity: 1, y: '0%' }}
                transition={{ duration: 1 }}
            >
                Login for Anwesha 2K23
            </motion.h1> */}
            <div className={styles.form}>
                {/* <motion.div
                    className={styles.lottie_container}
                    initial={{ opacity: 0, x: '-100%' }}
                    whileInView={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 1 }}
                >
                    <GreetingLottie animationPath="https://assets4.lottiefiles.com/packages/lf20_dn6rwtwl.json" />

                </motion.div> */}
                <motion.form
                    className={styles.mainForm}
                    initial={{ opacity: 0, x: '100%' }}
                    whileInView={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 1 }}
                >
                    <h3>LOGIN</h3>
                    <hr />
                    {/* <div className={styles.form_row}> */}
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
                    {/* </div> */}
                    {/* <div className={styles.form_row}> */}
                    <div className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                    </div>

                    <Link href="#" className={styles.forgotpass}>Forgot password?</Link>
                    {/* </div> */}
                    {/* <div className={styles.buttonWrapper}>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div> */}
                    <motion.div
                        className={styles.buttonWrapper}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <button onClick={(e) => handleSubmit(e)}>SUBMIT</button>
                    </motion.div>
                    <Link href="/userRegister">Don't have an account? Register here.</Link>
                </motion.form>
                {/* {success && <Modal title="Success" body="You have successfully registered for Campus Ambassador" closeHandler={setSuccess} />}
        {failure && <Modal title="Error" body={errorMsg} closeHandler={setFailure} />} */}
            </div>
        </div>
    )
}

export default UserLoginForm
