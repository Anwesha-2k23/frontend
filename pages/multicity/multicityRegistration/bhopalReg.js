import React from 'react'
import styles from '../../../styles/BhopalReg.module.css'
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const host = "backend.anwesha.live";

const bhopalReg = () => {

    const [eventname, setEventName] = React.useState(null);
    const [orgtype, setOrgType] = React.useState(null);
    const [leadername, setLeaderName] = React.useState(null);
    const [leaderemail, setLeaderEmail] = React.useState(null);
    const [leaderphone, setLeaderPhone] = React.useState(null);
    const [leaderorg, setLeaderOrg] = React.useState(null);
    const [member1name, setMember1Name] = React.useState(null);
    const [member1email, setMember1Email] = React.useState(null);
    const [member1phone, setMember1Phone] = React.useState(null);
    const [member1org, setMember1Org] = React.useState(null);
    const [member2name, setMember2Name] = React.useState(null);
    const [member2email, setMember2Email] = React.useState(null);
    const [member2phone, setMember2Phone] = React.useState(null);
    const [member2org, setMember2Org] = React.useState(null);
    const [member3name, setMember3Name] = React.useState(null);
    const [member3email, setMember3Email] = React.useState(null);
    const [member3phone, setMember3Phone] = React.useState(null);
    const [member3org, setMember3Org] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
    const [failure, setFailure] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(leaderemail)
        console.log(eventname)
        let body = { "event_id": eventname, "organisation_type": orgtype, "leader_email": leaderemail, "leader_name": leadername, "leader_phone_no": leaderphone, "leader_organisation": leaderorg, "member_one_name": member1name, "member_one_email": member1email, "member_one_phone_no": member1phone, "member_one_organisation": member1org, "member_two_name": member2name, "member_two_email": member2email, "member_two_phone_no": member2phone, "member_two_organisation": member2org, "member_three_name": member3name, "member_three_email": member3email, "member_three_phone_no": member3phone, "member_three_organisation": member3org };
        console.log(body);
        try {
            const response = await fetch(`https://${host}/multicity/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            //check if request is successful
            if (response.status === 200) {
                setSuccess(true);
                setFailure(false);
                setErrorMsg("");
                const data = await response.json();
                // console.log(data)
                toast.success('You are successfully registered', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else if (response.status === 409) {
                const data = await response.json();
                setErrorMsg(data.message);
                setFailure(true);
                setSuccess(false);
                toast.error('Unable to register', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                const data = await response.json();
                setErrorMsg("Internal Server Error. Check your browser console for more details");
                setFailure(true);
                setSuccess(false);
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        catch (err) {
            console.log(err);
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
            <div className={styles.hero}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.mainHeading}>Registration</h1>
                    <form className={styles.mainForm} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                        <motion.div className={styles.field} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                            <label htmlFor="EventName">Event's Name</label>
                            <br />
                            <div className={styles.radio}>
                                <div>
                                    <div className={styles.radioBtn}>
                                        <input
                                            type="radio"
                                            name="EventName"
                                            value="ev8d"
                                            id="Heel Turn"
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                        <label for="Heel Turn">Heel Turn</label></div>
                                    <div className={styles.radioBtn}>
                                        <input
                                            type="radio"
                                            name="EventName"
                                            value="evfb"
                                            id="Syngphony (Solo)"
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                        <label for="Syngphony (Solo)">Syngphony (Solo)</label></div>
                                    <div className={styles.radioBtn}>
                                        <input
                                            type="radio"
                                            name="EventName"
                                            value="evb6"
                                            id="Syngphony (Duet)"
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                        <label for="Syngphony (Duet)">Syngphony (Duet)</label></div>
                                </div>
                                <div>
                                    <div className={styles.radioBtn}>
                                        <input
                                            type="radio"
                                            name="EventName"
                                            value="ev6a"
                                            id="Yuddhkshetra"
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                        <label for="Yuddhkshetra">Yuddhkshetra</label></div>
                                    <div className={styles.radioBtn}>
                                        <input
                                            type="radio"
                                            name="EventName"
                                            value="ev4f"
                                            id="Mr./Ms. Anwesha"
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                        <label for="Mr./Ms. Anwesha">Mr./Ms. Anwesha</label></div>
                                </div>
                            </div>
                            <br />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                            <h2 className={styles.subHeading}>Leader's Details</h2>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Leader_Name">Leader's Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Leader_Name"
                                        placeholder='Eg: Rohit Kumar'
                                        required
                                        onChange={(e) => setLeaderName(e.target.value)}
                                    />
                                    <br />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="Leader_Phone_number">Leader's Phone Number</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Leader_Phone_Number"
                                        placeholder='Eg: 9835486875'
                                        required
                                        maxLength="10"
                                        onChange={(e) => setLeaderPhone(e.target.value)}
                                    />
                                    <br />
                                </div>
                            </div>
                            <div className={styles.form_row}>
                                <div className={styles.field}>
                                    <label htmlFor="Leader_Email">Leader's Email</label>
                                    <br />
                                    <input
                                        type="email"
                                        name="Leader_Email"
                                        placeholder='Eg: rohit232@gmail.com'
                                        required
                                        onChange={(e) => setLeaderEmail(e.target.value)}
                                    />
                                    <br />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="Leader_Organization">Leader's Organization</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Leader_Organization"
                                        placeholder='Eg: IIT Patna'
                                        required
                                        onChange={(e) => setLeaderOrg(e.target.value)}
                                    />
                                    <br />
                                </div>
                            </div>
                            <div className={styles.field} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                                <label htmlFor="OrgType">Organization Type</label>
                                <br />
                                <div className={styles.radio}>
                                    <div>
                                        <div className={styles.radioBtn}>
                                            <input
                                                type="radio"
                                                name="OrgType"
                                                value="0"
                                                id="School"
                                                onChange={(e) => setOrgType(0)}
                                            />
                                            <label for="School">School</label></div>
                                        <div className={styles.radioBtn}>
                                            <input
                                                type="radio"
                                                name="OrgType"
                                                value="1"
                                                id="College"
                                                onChange={(e) => setOrgType(1)}
                                            />
                                            <label for="College">College</label></div>
                                        <div className={styles.radioBtn}>
                                            <input
                                                type="radio"
                                                name="OrgType"
                                                value="2"
                                                id="Others"
                                                onChange={(e) => setOrgType(2)}
                                            />
                                            <label for="Others">Others</label></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {eventname == 'evb6' ? (
                            <motion.div initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                                <h2 className={styles.subHeading}>Team Member's Details</h2>
                                <div className={styles.form_row}>
                                    <div className={styles.field}>
                                        <label htmlFor="Member_1_Name">Team Member's Name</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="Member_1_Name"
                                            placeholder='Eg: Rohit Kumar'
                                            required
                                            onChange={(e) => setMember1Name(e.target.value)}
                                        />
                                        <br />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="Member_1_Phone_number">Team Member's Phone Number</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="Member_1_Phone_Number"
                                            placeholder='Eg: 9835486875'
                                            required
                                            maxLength="10"
                                            onChange={(e) => setMember1Phone(e.target.value)}
                                        />
                                        <br />
                                    </div>
                                </div>
                                <div className={styles.form_row}>
                                    <div className={styles.field}>
                                        <label htmlFor="Member_1_Email">Team Member's Email</label>
                                        <br />
                                        <input
                                            type="email"
                                            name="Member_1_Email"
                                            placeholder='Eg: rohit232@gmail.com'
                                            required
                                            onChange={(e) => setMember1Email(e.target.value)}
                                        />
                                        <br />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="Member_1_Organization">Team Member's Organization</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="Member_1_Organization"
                                            placeholder='Eg: IIT Patna'
                                            required
                                            onChange={(e) => setMember1Org(e.target.value)}
                                        />
                                        <br />
                                    </div>
                                </div>
                            </motion.div>) : null}

                        {eventname == 'ev6a' ? (
                            <div>
                                <motion.div initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                                    <h2 className={styles.subHeading}>1st Team Member's Details</h2>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_1_Name">1<sup>st</sup> Team Member's Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_1_Name"
                                                placeholder='Eg: Rohit Kumar'
                                                required
                                                onChange={(e) => setMember1Name(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_1_Phone_number">1<sup>st</sup> Team Member's Phone Number</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_1_Phone_Number"
                                                placeholder='Eg: 9835486875'
                                                required
                                                maxLength="10"
                                                onChange={(e) => setMember1Phone(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_1_Email">1<sup>st</sup> Team Member's Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                name="Member_1_Email"
                                                placeholder='Eg: rohit232@gmail.com'
                                                required
                                                onChange={(e) => setMember1Email(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_1_Organization">1<sup>st</sup> Team Member's Organization</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_1_Organization"
                                                placeholder='Eg: IIT Patna'
                                                required
                                                onChange={(e) => setMember1Org(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                                    <h2 className={styles.subHeading}>2nd Team Member's Details</h2>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_2_Name">2<sup>nd</sup> Team Member's Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_2_Name"
                                                placeholder='Eg: Rohit Kumar'
                                                required
                                                onChange={(e) => setMember2Name(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_2_Phone_number">2<sup>nd</sup> Team Member's Phone Number</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_2_Phone_Number"
                                                placeholder='Eg: 9835486875'
                                                required
                                                maxLength="10"
                                                onChange={(e) => setMember2Phone(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_2_Email">2<sup>nd</sup> Team Member's Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                name="Member_2_Email"
                                                placeholder='Eg: rohit232@gmail.com'
                                                required
                                                onChange={(e) => setMember2Email(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_2_Organization">2<sup>nd</sup> Team Member's Organization</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_2_Organization"
                                                placeholder='Eg: IIT Patna'
                                                required
                                                onChange={(e) => setMember2Org(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
                                    <h3 className={styles.subHeading}>3rd Team Member's Details</h3>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_3_Name">3<sup>rd</sup> Team Member's Name</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_3_Name"
                                                placeholder='Eg: Rohit Kumar'
                                                required
                                                onChange={(e) => setMember3Name(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_3_Phone_number">3<sup>rd</sup> Team Member's Phone Number</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_3_Phone_Number"
                                                placeholder='Eg: 9835486875'
                                                required
                                                maxLength="10"
                                                onChange={(e) => setMember3Phone(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                    <div className={styles.form_row}>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_3_Email">3<sup>rd</sup> Team Member's Email</label>
                                            <br />
                                            <input
                                                type="email"
                                                name="Member_3_Email"
                                                placeholder='Eg: rohit232@gmail.com'
                                                required
                                                onChange={(e) => setMember3Email(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="Member_3_Organization">3<sup>rd</sup> Team Member's Organization</label>
                                            <br />
                                            <input
                                                type="text"
                                                name="Member_3_Organization"
                                                placeholder='Eg: IIT Patna'
                                                required
                                                onChange={(e) => setMember3Org(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        ) : null}
                        <motion.div className={styles.buttonWrapper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={(e) => handleSubmit(e)}>Submit</button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default bhopalReg
