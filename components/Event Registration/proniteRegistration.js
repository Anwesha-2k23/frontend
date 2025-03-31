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
function openPay(data) {
    const options = {
        atomTokenId: data.atomTokenId,
        merchId: data.merchId,
        custEmail: data.custEmail,
        custMobile: data.custMobile,
        returnUrl: data.returnUrl,
    }
    let atom = new AtomPaynetz(options, 'uat')
}
async function proniteRegistration(
    eventID,
    email,
    phone,
    anwesha_id,
    usertype,
    setisloading
) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    if (usertype == 'iitp_student') {
        toast.warn("IITP students don't need to buy pass", {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
        setisloading(false);
        return;

    }
    var raw = JSON.stringify({
        event_id: eventID,
        amount: 949,
        email: email,
        phone: phone,
        anwesha_id: anwesha_id,
        type: 'FESTPASS',
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
    }
    console.log(raw);

    const data = await fetch(`${host}/festpasses/atompay`, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error)
        })
    if (data.message == 'You have already purchased festpass') {
        toast.warn("Already purchased", {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
        setisloading(false);
        return;
    }

    const res = await loadScript(
        'https://psa.atomtech.in/staticdata/ots/js/atomcheckout.js?v=' +
        data.atomTokenId
    )
    openPay(data)
    setisloading(false);
    toast.success('If purchased you can check it in profile', {
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


export { proniteRegistration }








