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
async function soloEventRegistration(
    eventID,
    amount,
    email,
    phone,
    anwesha_id,
    router,
    closeHandler
) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
        event_id: eventID,
        amount: amount,
        email: email,
        phone: phone,
        anwesha_id: anwesha_id,
        type: 'solo',
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

    const res = await loadScript(
        'https://psa.atomtech.in/staticdata/ots/js/atomcheckout.js?v=' +
        data.atomTokenId
    )
    console.log(data);
    if (data.messagge) {
        toast.error('Already Registered', {
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
        openPay(data);
    }
    toast.success("If Registered, it will show in profile", {
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

async function soloEventRegistrationiitp(eventID, router, closeHandler) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
    console.log(data);
    if (data.messagge) {
        toast.error('Already REgistered', {
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
        toast.success("Registration successfully, check in profile", {
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

    await delay(3000);
    closeHandler()

}
export { soloEventRegistration, soloEventRegistrationiitp }
