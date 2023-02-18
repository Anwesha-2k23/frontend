import { setRequestMeta } from 'next/dist/server/request-meta'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/EventRegistration.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const eventRegistration = () => {
    const router = useRouter()
    const {
        id,
        name,
        description,
        max_team_size,
        min_team_size,
        registration_fee,
    } = router.query
    const [eventID, setEventID] = useState('')
    const [eventName, setEventName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [isTeamGenerated, setIsTeamGenerated] = useState(false)
    const [isSolo, setIsSolo] = useState(false)
    const [teamID, setTeamID] = useState()
    const [memberID, setMemberID] = useState([])
    useEffect(() => {
        if (router.isReady) {
            setEventName(name)
            setIsSolo(min_team_size > 1 ? false : true)
            setEventID(id)
        }
    }, [router.isReady])

    const generateTeamID = async (e) => {
        e.preventDefault()
        // console.log('Generating Team ID')
        let body = { event_id: eventID, team_name: teamName }
        let host = process.env.NEXT_PUBLIC_HOST
        try {
            const response = await fetch(`https://${host}/event/createteam`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })

            if (response.status === 201) {
                const data = await response.json()
                setTeamID(data.team_id)
                setIsTeamGenerated(true)
            } else {
                console.log(response.status)
            }
        } catch (err) {
            console.log(err)
        }
    }
    let teamSize = []
    for (var i = min_team_size; i <= max_team_size; i++) {
        teamSize.push(i)
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.mainHeading}>Registration</h1>
                    <form className={styles.mainForm}>
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            whileInView={{ opacity: 1, x: '0%' }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className={styles.subHeading}>
                                Team's Details
                            </h2>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Event_Name">
                                        Event's Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Event_Name"
                                        // placeholder='Dance Event'
                                        readOnly
                                        value={eventName}
                                    />
                                    <br />
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Teams_Name">
                                        Teams's Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Teams_Name"
                                        placeholder="Eg: Rockers"
                                        required
                                        value={teamName}
                                        onChange={(e) =>
                                            setTeamName(e.target.value)
                                        }
                                    />
                                    <br />
                                </div>
                            </div>

                            <motion.div
                                className={styles.buttonWrapper}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <button onClick={(e) => generateTeamID(e)}>
                                    Generate Team
                                </button>
                            </motion.div>

                            {isTeamGenerated && (
                                <div className={styles.form_row}>
                                    <div className={styles.field}>
                                        <label htmlFor="Team_ID">
                                            Team's ID
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="Team_ID"
                                            placeholder="TMANW123"
                                            readOnly
                                            value={teamID}
                                        />
                                        <br />
                                    </div>
                                </div>
                            )}

                            {/* TODO: Add the component with the for loop from min participation to max participation */}
                            {teamSize.map((item, index) => {
                                ;<div>Hello World</div>
                            })}

                            {/* {!isTeamGenerated && ( */}
                            {teamSize.map((item, index) => (
                                <div className={styles.form_row} key={index}>
                                    <div className={styles.field}>
                                        <label htmlFor="Team_Member">
                                            Team Member's Anwesha ID of member{' '}
                                            {index + 1}
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="Team_Member"
                                            placeholder="Eg: ANW125478"
                                            // required
                                            value={memberID[index]}
                                            onChange={(e) => {
                                                console.log('clicked')
                                                memberID[index] = e.target.value
                                            }}
                                        />
                                        <br />
                                    </div>
                                </div>
                            ))}

                            {/* <div className={styles.buttonWrapper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                <button onClick={(e) => {e.preventDefault();addedMembers+1}}>Add Member</button>
                            </div> */}
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default eventRegistration
