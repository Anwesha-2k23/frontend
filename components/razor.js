import React, { useState, useContext } from 'react'
import { AuthContext } from './authContext'

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

function Razor() {
    const userData = useContext(AuthContext)
    // const [name, setName] = useState('Mehul')

    async function displayRazorpay() {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        )
        const __DEV__ = window.location.hostname === 'localhost'

        console.log(userData.state.user)

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append(
            'Cookie',
            'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFOVzgxYmYwY2IiLCJleHAiOjE2Nzc0MDgzMDMsImlhdCI6MTY3NzQwNDcwM30.U-kRCbCOaN_TftjlzsiLF8_RTv3A8bGccw2nkfe69zA'
        )

        var raw = JSON.stringify({
            event_id: 'EVT2794e',
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
            credentials: 'include',
        }

        const data = await fetch(
            'http://localhost:8000/event/registration/solo',
            requestOptions
        ).then((response) => response.json())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        // fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
        // 	t.json()
        // )

        console.log(data)

        const options = {
            key: __DEV__
                ? process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
                : 'PRODUCTION_KEY',
            currency: 'INR',
            amount: data.payment_details.amount.toString(),
            order_id: data.payment_details.id,
            name: 'Donation',
            description: 'Thank you for nothing. Please give us some money',
            // image: 'http://localhost:1337/logo.svg',
            handler: function (response) {
                console.log(response)
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                name: userData.state.user.full_name,
                email: userData.state.user.email_id,
                phone_number: '7025482101',
            },
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    onClick={displayRazorpay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Donate $5
                </a>
            </header>
        </div>
    )
}

export default Razor
