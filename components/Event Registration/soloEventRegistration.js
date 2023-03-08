import React from 'react'
import { useRouter } from 'next/router'
const host = process.env.NEXT_PUBLIC_HOST
0

async function soloEventRegistration(eventID, router) {

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

    console.log('Proper', data)
    router.push(data.payment_url)

    
}
export default soloEventRegistration