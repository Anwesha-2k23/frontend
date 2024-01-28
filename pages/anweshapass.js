import React from 'react'
import styles from '../styles/anweshapass.module.css'

function anweshapass() {
  return (
    <div className={styles.parentContainer}>
        {/* <h1 className={styles.heading}>AnweshaPass</h1>
        <div>AnweshaPass is a QR based pass validation system that enables smooth and hassle-free checking in at various events during Anwesha ‘23</div>
        <ol type="1">
            <li>Each user registered on the Anwesha database would have a QR displayed in their profile on the Anwesha website or app that would be used for validating entry and in certain scenarios, exit as well</li>
            <li>At various gates/event desks, organisers may ask participants/attendees to produce their AnweshaPass QR for verification</li>
            <li>If the QR is suspected to have been compromised, the user can regenerate a new one by clicking on the ‘Regenerate QR’ button provided along with the QR in the profile page</li>
            <li>Please do note that the organisers have complete jurisdiction with regards to allowing/disallowing entry/participation</li>
        </ol> */}
        <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>AnweshaPass</h2>
                    <hr className={styles.sectionHeadingBar} />
                    <div className={styles.sectionContent}>
                    AnweshaPass is a QR based pass validation system that enables smooth and hassle-free checking in at various events during Anwesha ‘23
                    <ol type="1">
            <li>Each user registered on the Anwesha database would have a QR displayed in their profile on the Anwesha website or app that would be used for validating entry and in certain scenarios, exit as well</li>
            <li>At various gates/event desks, organisers may ask participants/attendees to produce their AnweshaPass QR for verification</li>
            <li>If the QR is suspected to have been compromised, the user can regenerate a new one by clicking on the ‘Regenerate QR’ button provided along with the QR in the profile page</li>
            <li>Please do note that the organisers have complete jurisdiction with regards to allowing/disallowing entry/participation</li>
        </ol>
                    </div>
                </div>
    </div>
  )
}

export default anweshapass