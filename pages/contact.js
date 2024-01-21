import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/contact.module.css';


const Contact=()=>{
    const form = useRef();

    const resetForm = ()=>{
        form.current.reset();
    }
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            "service_3ngn78q",
            "template_w3widbd", 
            form.current,
            "NDeri4iyFqfZH9rNw"
        )
        .then((result) => {
              console.log(result.text);
              resetForm({name: ''})
              console.log("message sent")

          }, (error) => {
              console.log(error.text);

          });
      };


    return( <div className={styles.container}>
        <div className={styles.forms}>
        <form  ref={form} onSubmit={sendEmail}>
            <h1 className={styles.heading}>Contact Here</h1>
            <label className={styles.texts}>Name</label>
            <input className={styles.inputs}
             type="text" 
             name="user_name" /> 
            <label className={styles.texts}>Email</label>
            <input className={styles.inputs}
             type="email"
              name="user_email" />
            <label className={styles.texts}>Message</label>
            <textarea className={styles.inputs} name="message" />
            <input className={styles.button} 
             type="submit" 
             value="Send" />
        </form>
        </div>
    </div>
    )
}
export default Contact;

