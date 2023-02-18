import React from 'react';

import Modal from '../Modal';

import styles from './style.module.css'
import { motion } from "framer-motion";
import GreetingLottie from "../displaylottie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const host = "backend.anwesha.live";

const CampusAmbassadorForm = () => {

  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cnfPassword, setCnfPassword] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if required fields are empty
    if(phone === '' || name === '' || email === '' || college === '' || password === '' || cnfPassword === '') {
      setErrorMsg("Please fill all the required fields");
      setFailure(true);
      toast.error('Please fill all the required fields', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
      })
      return;
    }

    if (password !== cnfPassword) {
      setErrorMsg("Passwords do not match");
      setFailure(true);
      toast.error('Passwords do not match', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
      })
      return;
    }

    if (phone.length == 10 && Number(phone) == NaN){
      setErrorMsg("Phone number should be valid");
      setFailure(true);
      toast.error('Phone number should be a number', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
      })
      return;
    }
    let body = { "phone_number": phone, "full_name": name, "email_id": email, "college_name": college, "password": password};
    try {
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
        console.log(data)
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
      else {
        const data = await response.json();
        console.log(data)
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
      <motion.h1 className={styles.mainHeading} initial={{ opacity: 0, y: "-150%" }} whileInView={{ opacity: 1, y: "0%" }} transition={{ duration: 1 }}>Register for Campus ambassador</motion.h1>
      <div className={styles.form}>
        <motion.div className={styles.lottie_container} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
          <GreetingLottie animationPath="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" />
        </motion.div>
        <motion.form className={styles.mainForm} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: "0%" }} transition={{ duration: 1 }}>
          <div className={styles.form_row}>
          <div className={styles.field}>
            <label htmlFor="Phone_number">Phone Number</label>
            <br />
            <input
              type="text"
              name="Phone_Number"
              placeholder='Eg: 9835486875'
              required
              maxLength="10"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
          </div>
          <div className={styles.field}>
            <label htmlFor="email_id">Email ID</label>
            <br />
            <input
              type="email"
              name="Email_Id"
              placeholder='Eg: vineet@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
          </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="full_name">Full Name</label>
            <br />
            <input
              type="text"
              name="Full_Name"
              placeholder='Eg: Vineet Kumar Singh'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
          </div>
          <div className={styles.field}>
            <label htmlFor="college_name">College Name</label>
            <br />
            <input
              type="text"
              name="College_Name"
              placeholder='Eg: IIT Patna'
              onChange={(e) => setCollege(e.target.value)}
              required
            />
            <br />
          </div>
          {/* <div className={styles.form_row}>
          <div className={styles.field}>
            <label htmlFor="refferal_code">Refferal Code</label>
            <br />
            <input
              type="text"
              name="Refferal_Code"
              placeholder='Eg: ANW46DDC'
              onChange={(e) => setReferral(e.target.value)}
              required
            />
            <br />
          </div>
          <div className={styles.field}>
            <label htmlFor="refferal_code">Years of Study</label>
            <br />
            <input
              type="text"
              name="Refferal_Code"
              placeholder='Eg: BTECH 3rd year'
              onChange={(e) => setYearsOfStudy(e.target.value)}
              required
            />
            <br />
          </div>
          </div> */}
          <div className={styles.form_row}>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="Password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Confirm Password</label>
            <br />
            <input
              type="password"
              name="Password"
              placeholder='Confirm Password'
              onChange={(e) => setCnfPassword(e.target.value)}
              required
            />
            <br />
          </div>
          </div>
          {/* <div className={styles.buttonWrapper}>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div> */}
          <motion.div className={styles.buttonWrapper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </motion.div>
        </motion.form>
        {success && <Modal title="Success" body="You have successfully registered for Campus Ambassador" closeHandler={setSuccess} />}
        {/* {failure && <Modal title="Error" body={errorMsg} closeHandler={setFailure} />} */}
      </div>
    </div>
  )
}

export default CampusAmbassadorForm