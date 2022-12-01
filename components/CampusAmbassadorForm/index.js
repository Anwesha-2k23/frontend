import React from 'react';

import styles from './style.module.css'

const CampusAmbassadorForm = ()=>{

  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [referral, setReferral] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ phone, name, email, college, referral, password });
  }

    return (
        <>
            <h1 className={styles.mainHeading}>Register for Campus ambassador</h1>
            <form className={styles.mainForm}>
            <div className= {styles.field}>
                <label for="Phone_number">Phone Number</label>
                <br/>
                 <input
                   type="text"
                   name="Phone_Number"
                   required
                   maxlength="13"
                   onChange={(e)=>setPhone(e.target.value)}
                 />
                <br/>
            </div>
            <div className= {styles.field}>
                <label for="email_id">Email ID</label>
                <br/>
                  <input
                    type="email"
                    name="Email_Id"
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setName(e.target.value)}
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
                    onChange={(e)=>setCollege(e.target.value)}
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
                    onChange={(e)=>setReferral(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                <br/>
            </div>
            <div className={styles.buttonWrapper}>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </div>
            </form>
        </>
    )
}

export default CampusAmbassadorForm