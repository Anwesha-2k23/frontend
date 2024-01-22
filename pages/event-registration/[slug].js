import { setRequestMeta } from 'next/dist/server/request-meta'
import React, { useState, useEffect, useContext } from 'react'
import { teamEventRegistration, teamEventRegistrationiitp } from '../../components/Event Registration/teamEventRegistration'
import styles from '../../styles/EventRegistration.module.css'
import { AuthContext } from '../../components/authContext'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const eventRegistration = () => {
    const data = useContext(AuthContext)
    const router = useRouter()
    const userData = useContext(AuthContext)

    const {
        id,
        name,
        description,
        max_team_size,
        min_team_size,
        registration_fee,
        tags,
    } = router.query

    useEffect(() => {
        const anwID = data.state.user ? data.state.user.anwesha_id : ''
        var arr = []
        for (let i = 0; i < min_team_size; i++) {
            arr.push('')
        }
        arr[0] = anwID
        setMemberID(arr)
        if (!data.isAuth) {
            router.push('/userLogin')
        }
    }, [data])

    const [teamName, setTeamName] = useState('')
    const [memberID, setMemberID] = useState([])
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
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* <h1 className={styles.mainHeading}>Registration</h1> */}
                    <form className={styles.mainForm}>
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            whileInView={{ opacity: 1, x: '0%' }}
                            transition={{ duration: 1 }}
                        >
                            {/* <h2 className={styles.subHeading}>Team Details</h2> */}
                            <h2>{name}</h2>
                            <br />
                            {/* <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Event_Name">
                                        Event Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Event_Name"
                                        // placeholder='Dance Event'
                                        readOnly
                                        value={name}
                                    />
                                    <br />
                                </div>
                            </div> */}
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Teams_Name"  >
                                        Team Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Teams_Name"
                                        placeholder="Eg: Pwolians"
                                        required
                                        value={teamName}
                                        onChange={(e) =>
                                            setTeamName(e.target.value)
                                        }
                                    />
                                    <br />
                                </div>
                            </div>
                            <div
                                className={styles.members}
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    width: '100%',
                                }}
                            >
                                {memberID.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.member_input}>
                                            <span>{index + 1}</span>
                                            <div>ANW</div>
                                            <input
                                                type="text"
                                                name="Team_Member"
                                                // required
                                                value={item.substring(3)}
                                                readOnly={!index}
                                                onChange={(e) => {
                                                    let arr = [...memberID]
                                                    arr[index] =
                                                        'ANW' + e.target.value
                                                    setMemberID([...arr])
                                                }}
                                                // key={index + 1}
                                                required
                                                minLength={7}
                                                maxLength={7}
                                            />
                                            {index >= min_team_size ? (
                                                <img
                                                    src="/assets/remove.svg"
                                                    onClick={() => {
                                                        let arr = memberID
                                                        arr.splice(index, 1)
                                                        setMemberID([...arr])
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    )
                                })}
                            </div>
                            {memberID.length < max_team_size ? (
                                <button
                                    className={styles.add_member_btn}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setMemberID([...memberID, ''])
                                    }}
                                >
                                    <img src="/assets/plus.svg" />
                                    Add Team Member
                                </button>
                            ) : null}
                            <br />
                            <button
                                className={styles.register_btn}
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (userData.state.user.user_type === 'iitp_student') {
                                        if (tags !== "5")
                                            teamEventRegistrationiitp(
                                                id,
                                                teamName,
                                                memberID,
                                                router,
                                            )
                                        else {
                                            teamEventRegistration(
                                                id,
                                                teamName,
                                                memberID,
                                                userData.state.user.email_id,
                                                userData.state.user.phone_number,
                                                registration_fee,
                                                router,
                                                toast
                                            )
                                        }
                                    }
                                    else {
                                        // if (registration_fee !== "0.00")
                                        teamEventRegistration(
                                            id,
                                            teamName,
                                            memberID,
                                            userData.state.user.email_id,
                                            userData.state.user.phone_number,
                                            registration_fee,
                                            router,
                                            toast
                                        )
                                        // else
                                        //     teamEventRegistrationiitp(
                                        //         id,
                                        //         teamName,
                                        //         memberID,
                                        //         router,
                                        //     )
                                    }
                                }}
                            >
                                REGISTER
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default eventRegistration
