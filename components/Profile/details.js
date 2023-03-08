import React, { useState, useContext } from 'react'
import { AuthContext } from '../authContext'
import styles from './profile.module.css'

const host = process.env.NEXT_PUBLIC_HOST

function Details() {
    const userData = useContext(AuthContext)
    const profDetails = userData.state.user || { anwesha_id: '' }
    const [formData, setFormData] = useState(profDetails)
    const [edit, setEdit] = useState(false)

    function editProfile() {
        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        var raw = JSON.stringify({
            full_name: formData.full_name,
            gender: formData.gender,
            college_name: formData.college_name,
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            credentials: 'include',
        }

        fetch(`${host}/user/editprofile`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error))
    }

    return (
        <div className={styles.container}>
            {edit ? null : (
                <img
                    src="/assets/edit.svg"
                    onClick={() => {
                        setEdit(true)
                    }}
                />
            )}
            <div className={styles.field}>
                <label htmlFor="full_name">Full Name</label>
                <br />
                <input
                    type="text"
                    name="Full Name"
                    // placeholder="Full Name"
                    value={formData.full_name}
                    onChange={(e) =>
                        setFormData({ ...formData, full_name: e.target.value })
                    }
                    required
                    disabled={!edit}
                />
                <br />
            </div>
            <div className={styles.field}>
                <label htmlFor="email">Email ID</label>
                <br />
                <input
                    type="email"
                    name="Email ID"
                    // placeholder="Email ID"
                    value={formData.email_id}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phone_number: e.target.value,
                        })
                    }
                    required
                    disabled
                />
                <br />
            </div>
            <div className={styles.field}>
                <label htmlFor="phone">Phone Number</label>
                <br />
                <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            phone_number: e.target.value,
                        })
                    }
                    maxlength="10"
                    minlength="10"
                    disabled={!edit}
                />
                <br />
            </div>
            <div className={styles.field}>
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                    value={formData.gender}
                    onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                    }
                    name="Gender"
                    disabled={!edit}
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non Binary</option>
                </select>
                <br />
            </div>
            <div className={styles.field}>
                <label htmlFor="institute">Institute/Organization</label>
                <br />
                <input
                    type="text"
                    name="institute"
                    // placeholder="Full Name"
                    value={formData.college_name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            college_name: e.target.value,
                        })
                    }
                    disabled={!edit}
                />
                <br />
            </div>
            {/* <input value={formData.anwesha_id} disabled onChange={(e) => setFormData({...formData, anwesha_id: e.target.value})} /> */}
            {/* <input value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} /> */}
            {/* <input value={formData.phone_number} onChange={(e) => setFormData({...formData, phone_number: e.target.value})} /> */}
            {/* <input value={formData.email_id} disabled onChange={(e) => setFormData({...formData, email_id: e.target.value})} /> */}
            {/* <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
            <option>Male</option>
            <option>Female</option>
            <option>Non Binary</option>
        </select> */}
            {/* <input value={formData.college_name} onChange={(e) => setFormData({...formData, college_name: e.target.value})} /> */}
            {/* <input value={formData.instagram_id} onChange={(e) => setFormData({...formData, instagram_id: e.target.value})} />
        <input value={formData.facebook_id} onChange={(e) => setFormData({...formData, facebook_id: e.target.value})} /> */}
            {edit ? (
                <div className={styles.button_row}>
                    <button
                        onClick={() => {
                            setFormData(profDetails)
                            setEdit(false)
                        }}
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={() => {
                            editProfile()
                            setEdit(false)
                        }}
                    >
                        SUBMIT
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default Details
