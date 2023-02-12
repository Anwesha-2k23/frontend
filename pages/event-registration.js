import { setRequestMeta } from 'next/dist/server/request-meta'
import React,{useState} from 'react'
import styles from '../styles/EventRegistration.module.css'

const eventRegistration = () => {
    const [eventName, setEventName] = useState('Dance Event')
    const [teamName, setTeamName] = useState('')
    const [isTeamGenerated, setIsTeamGenerated] = useState(false)
    const [isSolo, setIsSolo] = useState(false)
    const [teamID, setTeamID] = useState('')
    const [memberID, setMemberID] = useState([''])
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.mainHeading}>Registration</h1>
                    <form className={styles.mainForm} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                        <div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                            <h2 className={styles.subHeading}>Team's Details</h2>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Event_Name">Event's Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Event_Name"
                                        placeholder='Dance Event'
                                        required
                                        disabled
                                        value = {eventName}
                                    />
                                    <br />
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Teams_Name">Teams's Name</label>
                                    <br />
                                    <input
                                        type="email"
                                        name="Teams_Name"
                                        placeholder='Eg: rohit232@gmail.com'
                                        required
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                    />
                                    <br />
                                </div>
                            </div>
                            
                            {isTeamGenerated && (
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Team_ID">Team's ID</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Team_ID"
                                        placeholder='TMANW123'
                                        required
                                        disabled
                                        value = {teamID}
                                    />
                                    <br />
                                </div>
                            </div>)}

                            {/* TODO: Add the component with the for loop from min participation to max participation */}
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Team_Member">Team Member's Anwesha ID</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Team_Member"
                                        placeholder='Eg: ANW125478'
                                        required
                                        value = {memberID[0]}
                                    />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default eventRegistration
