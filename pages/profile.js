import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../components/authContext';

const host = process.env.NEXT_PUBLIC_HOST

function profile() {
    const userData = useContext(AuthContext);
    // const profDetails = userData.state.user;
    const [profDetails, setProfDetails] = useState(userData.state.user || {anwesha_id: ""});

    // useEffect(() => {
    //     fetch("http://localhost:8000/user/editprofile", {
    //         method: 'GET', 
    //         credentials : 'include',
    //         redirect: 'follow',
    //       })
    //     .then(response => response.json())
    //     .then(result => {setProfDetails(result), console.log(result)})
    //     .catch(error => console.log('error', error));
    // }, [])

    function editProfile() {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({full_name: profDetails.full_name, gender: profDetails.gender, college_name: profDetails.college_name});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  credentials: 'include'
};

fetch(`${host}/user/editprofile`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }


  return (
    <div style={{height: '1000px', marginTop: '300px'}}>
        <input value={profDetails.anwesha_id} disabled onChange={(e) => setProfDetails({...profDetails, anwesha_id: e.target.value})} />
        <input value={profDetails.full_name} onChange={(e) => setProfDetails({...profDetails, full_name: e.target.value})} />
        <input value={profDetails.phone_number} onChange={(e) => setProfDetails({...profDetails, phone_number: e.target.value})} />
        <input value={profDetails.email_id} disabled onChange={(e) => setProfDetails({...profDetails, email_id: e.target.value})} />
        <select value={profDetails.gender} onChange={(e) => setProfDetails({...profDetails, gender: e.target.value})}>
            <option>Male</option>
            <option>Female</option>
            <option>Non Binary</option>
        </select>
        <input value={profDetails.college_name} onChange={(e) => setProfDetails({...profDetails, college_name: e.target.value})} />
        {/* <input value={profDetails.instagram_id} onChange={(e) => setProfDetails({...profDetails, instagram_id: e.target.value})} />
        <input value={profDetails.facebook_id} onChange={(e) => setProfDetails({...profDetails, facebook_id: e.target.value})} /> */}

        <button onClick={editProfile}>SUBMIT</button>
    </div>
  )
}

export default profile