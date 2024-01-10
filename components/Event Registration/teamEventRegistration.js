import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../authContext'
const host = process.env.NEXT_PUBLIC_HOST
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
function openPay(data){
        console.log('openPay called {{ atomTokenId|escapejs }}');
        const options = {
          "atomTokenId": data.atomTokenId,
          "merchId": data.merchId,
          "custEmail": data.custEmail,
          "custMobile": data.custMobile,
          "returnUrl": data.returnUrl,
        }
        let atom = new AtomPaynetz(options,'uat');
    }
async function teamEventRegistration(eventID, teamName, teamMembers, email, phone, amount, router) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    // console.log(eventID,teamName,teamMembers,email,phone);
    var raw = JSON.stringify({
        event_id: eventID,
        team_name: teamName,
        team_members: teamMembers,
        email: email,
        phone: phone,
        type: "team",
        amount: amount,
        anwesha_id: teamMembers[0],
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
    }
    const data = await fetch(`${host}/atompay/`, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error)
        })
    
    console.log('data', data)
    const res = await loadScript('https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v='+data.atomTokenId)
    openPay(data)
    // const data = await fetch(`${host}/event/registration/team`, requestOptions)

    // const response = await data.json()
    // if (data.status === 200 || data.status === 201) {
    //     if (data.payment_url) {
    //         router.push(response.payment_url)
    //     } else {
    //         toast.success(response.messagge, {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: 'light',
    //         })
    //         router.replace('/events')
    //     }
    // } else {
    //     if (Array.isArray(response.message)) {
    //         response.message.map((e) => {
    //             toast.error(e, {
    //                 position: 'top-right',
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: 'light',
    //             })
    //         })
    //     } else {
    //         toast.error(response.message, {
    //             position: 'top-right',
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: 'light',
    //         })
    //     }
    // }
}

export default teamEventRegistration
