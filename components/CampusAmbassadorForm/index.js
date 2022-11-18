import styles from './style.module.css'

const CampusAmbassadorForm = ()=>{
    return (
        <>
            <form action='' method="post" className={styles.mainForm}>
            <div className= {styles.field}>
                <label for="Phone_number">Phone Number</label>
                <br/>
                 <input
                   type="text"
                   name="Phone_Number"
                   required
                   maxlength="13"
                 />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="email_id">Email ID</label>
                <br/>
                  <input
                    type="email"
                    name="Email_Id"
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="email_id">Email ID</label>
                <br/>
                  <input
                    type="email"
                    name="Email_Id"
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="full_name">Full Name</label>
                <br/>
                  <input
                    type="text"
                    name="Full_Name"
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="college_name">College Name</label>
                <br/>
                  <input
                    type="text"
                    name="College_Name"
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="refferal_code">Refferal Code</label>
                <br/>
                  <input
                    type="text"
                    name="Refferal_Code"
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="password">Password</label>
                <br/>
                  <input
                    type="password"
                    name="Password"
                    required
                  />
                <br/>
            </div>
            <div className={styles.buttonWrapper}>
                <button type="submit">Submit</button>
            </div>
            </form>
        </>
    )
}

export default CampusAmbassadorForm