import React from 'react';

import Modal from '../Modal';

import styles from './style.module.css'

const host = "backend.anwesha.live";

const CampusAmbassadorForm = ()=>{

  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [referral, setReferral] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cnfPassword, setCnfPassword] = React.useState('');
  const [years_of_study, setYearsOfStudy] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== cnfPassword) {
      setErrorMsg("Passwords do not match");
      setFailure(true);
      return;
    }
    let body = { "phone_number": phone, "full_name": name, "email_id": email, "college_name": college, "refferal_code": referral, "password": password, "years_of_study": years_of_study };
    try{
      const response = await fetch(`https://${host}/campasambassador/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      //check if request is successful
      if (response.status === 201) {
        setSuccess(true);
        setFailure(false);
        setErrorMsg("");
        const data = await response.json();
      }
      else if(response.status === 409){
        const data = await response.json();
        setErrorMsg(data.message);
        setFailure(true);
        setSuccess(false);
      }
      else{
        setErrorMsg("Internal Server Error. Check your browser console for more details");
        setFailure(true);
        setSuccess(false);
      }
    }
    catch(err){
      console.log(err);
    }
  }

    return (
        <div className={styles.form}>
            <h1 className={styles.mainHeading}>Register for Campus ambassador</h1>
            <form className={styles.mainForm}>
            <div className= {styles.field}>
                <label htmlFor="Phone_number">Phone Number</label>
                <br/>
                 <input
                   type="text"
                   name="Phone_Number"
                   required
                   maxLength="13"
                   onChange={(e)=>setPhone(e.target.value)}
                 />
                <br/>
            </div>
            <div className= {styles.field}>
                <label htmlFor="email_id">Email ID</label>
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
                <label htmlFor="full_name">Full Name</label>
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
                <label htmlFor="college_name">College Name</label>
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
                <label htmlFor="refferal_code">Refferal Code</label>
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
                <label htmlFor="refferal_code">Years of Study</label>
                <br/>
                  <input
                    type="text"
                    name="Refferal_Code"
                    onChange={(e)=>setYearsOfStudy(e.target.value)}
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label htmlFor="password">Password</label>
                <br/>
                  <input
                    type="password"
                    name="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                <br/>
            </div>
            <div className= {styles.field}>
                <label htmlFor="password">Confirm Password</label>
                <br/>
                  <input
                    type="password"
                    name="Password"
                    onChange={(e)=>setCnfPassword(e.target.value)}
                    required
                  />
                <br/>
            </div>
            <div className={styles.buttonWrapper}>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </div>
            </form>
            {success && <Modal title="Success" body="You have successfully registered for Campus Ambassador" closeHandler={setSuccess}/>}
            {failure && <Modal title="Error" body={errorMsg} closeHandler={setFailure}/>}
        </div>
    )
}

export default CampusAmbassadorForm