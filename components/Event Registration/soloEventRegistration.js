import React from 'react'
import { useRouter } from 'next/router'
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
        const options = {
          "atomTokenId": data.atomTokenId,
          "merchId": data.merchId,
          "custEmail": data.custEmail,
          "custMobile": data.custMobile,
          "returnUrl": data.returnUrl,
        }
        let atom = new AtomPaynetz(options,'uat');
    }
async function soloEventRegistration(eventID, amount, email, phone, anwesha_id, router, closeHandler) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
        event_id: eventID,
        amount: amount,
        email: email,
        phone: phone,
        anwesha_id: anwesha_id,
        type: "solo"
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
    
    const res = await loadScript('https://psa.atomtech.in/staticdata/ots/js/atomcheckout.js?v='+data.atomTokenId)
    openPay(data)
}

async function soloEventRegistrationiitp (eventID, router, closeHandler) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
        event_id: eventID,
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
    }

    const data = await fetch(`${host}/event/registration/solo`, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error)
        })

    closeHandler()
    toast.success((data.message || data.messagge), {
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
export { soloEventRegistration, soloEventRegistrationiitp };
