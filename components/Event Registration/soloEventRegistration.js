import React from 'react'
import { useRouter } from 'next/router'
const host = process.env.NEXT_PUBLIC_HOST
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

async function soloEventRegistration(eventID, router, closeHandler) {

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

    const data = await fetch(
        `${host}/event/registration/solo`,
        requestOptions
    ).then((response) => response.json()).catch(error => {console.error(error)})
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    // fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
    // 	t.json()
    // )
    if(data.payment_url) {
        router.push(data.payment_url)
    }
    else {
        closeHandler();
        toast.success(data.messagge, {
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


    
}
export default soloEventRegistration