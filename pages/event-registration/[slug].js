import { setRequestMeta } from 'next/dist/server/request-meta'
import React, { useState, useEffect, useContext } from 'react'
import teamEventRegistration from '../../components/Payments/teamEventRegistration';
import styles from '../../styles/EventRegistration.module.css'
import { AuthContext } from '../../components/authContext';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const eventRegistration = () => {
    const data = useContext(AuthContext);

    const router = useRouter()
    const {
        id,
        name,
        description,
        max_team_size,
        min_team_size,
        registration_fee,
    } = router.query
    useEffect(() => {
        const anwID = data.state.user ? data.state.user.anwesha_id : '';
        const arr = Array(min_team_size).fill("")
        arr[0] = anwID
        setMemberID(arr);
    }, [data])
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
        // setMemberID([data.state.user.anwesha_id, ...new Array(max_team_size).fill("")]);

            console.log({ min_team_size, max_team_size })
        }
    }, [router.isReady])

    // const generateTeamID = async (e) => {
    //     e.preventDefault()
    //     // console.log('Generating Team ID')
    //     let body = { event_id: eventID, team_name: teamName }
    //     let host = process.env.NEXT_PUBLIC_HOST
    //     try {
    //         const response = await fetch(`http://localhost:8000/event/createteam`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(body),
    //             credentials: 'include'
    //         })

    //         if (response.status === 201) {
    //             const data = await response.json()
    //             setTeamID(data.team_id)
    //             setIsTeamGenerated(true)
    //         } else {
    //             console.log(response.status)
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    let teamSize = []
    for (var i = 1; i <= parseInt(max_team_size); i++) {
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
                                Team Details
                            </h2>
                            <div className={styles.form_row}>
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
                            <div className={styles.members} style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                            {memberID.map((item, index) => {
                            return(<div className={styles.member_input}>
                                <span>{index + 1}</span>
                                <div>ANW</div>
                                <input
                                type="text"
                                name="Team_Member"
                                // required
                                value={memberID[index].substring(3)}
                                readOnly={!index}
                                onChange={(e) => {let arr = memberID; memberID[index] = e.target.value; setMemberID(arr)}}
                                required
                                minLength={7}
                                maxLength={7}
                                />
                                {index >= min_team_size ? <img src='/assets/remove.svg' onClick={() => {let arr = memberID; arr.splice(index, 1); setMemberID([...arr])}} /> : null}
                            </div>)})}
                            </div>
                            {memberID.length < max_team_size ? <button className={styles.add_member_btn} onClick={(e) => {e.preventDefault(); setMemberID([...memberID, ""])}}><img src='/assets/plus.svg' />Add Team Member</button> : null}

                            {/* {loop(min_team_size - 1, i => {
                                return(
                                    <div>
                                        <div>ANW</div>
                                        <input
                                        type="text"
                                        name="Team_Member"
                                        // required
                                        value={memberID[i]}
                                        onChange={(e) => {let arr = [...memberID]; arr[i] = e.target.value; setMemberID([...arr])}}
                                        readOnly
                                        />
                                    </div>
                                )
                            })} */}


                            {/* {[...Array(parseInt(min_team_size) - 1)].map((elementInArray, index) => { 
                                return(
                                    <div>
                                        <div>ANW</div>
                                        <input
                                        type="text"
                                        name="Team_Member"
                                        // required
                                        value={memberID[i]}
                                        onChange={(e) => {let arr = [...memberID]; arr[i] = e.target.value; setMemberID([...arr])}}
                                        readOnly
                                        />
                                    </div>
                                )
                            })}
                            {[...Array(parseInt(max_team_size) - parseInt(min_team_size))].map((elementInArray, index) => { 
                                return(
                                    <div>
                                        <div>ANW Extras</div>
                                        <input
                                        type="text"
                                        name="Team_Member"
                                        // required
                                        value={memberID[i]}
                                        onChange={(e) => {let arr = [...memberID]; arr[i] = e.target.value; setMemberID([...arr])}}
                                        readOnly
                                        />
                                    </div>
                                )
                            })} */}

                            {/* <motion.div
                                className={styles.buttonWrapper}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                            > */}
                            <br/>
                                <button className={styles.register_btn}
                                onClick={(e) => {e.preventDefault(); teamEventRegistration(data, id, teamName, memberID)}}
                                >
                                    REGISTER
                                </button>
                            {/* </motion.div> */}

                            {/* {isTeamGenerated && (
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
                            )} */}

                            {/* TODO: Add the component with the for loop from min participation to max participation */}

                            {/* {!isTeamGenerated && ( */}
                            {/* {teamSize.map((item, index) => (
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
                            ))} */}

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
