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
    console.log('raw', raw)
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
    const res = await loadScript('https://psa.atomtech.in/staticdata/ots/js/atomcheckout.js?v='+data.atomTokenId)
    openPay(data)
}
export default soloEventRegistration
