import React, { useState, useContext } from 'react'
import { AuthContext } from '../authContext'
const host = process.env.NEXT_PUBLIC_HOST

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


// function Razor() {
// 	const userData = useContext(AuthContext)
	// const [name, setName] = useState('Mehul')

	async function teamEventRegistration(userData, eventID, teamName, teamMembers) {
        // const userData = useContext(AuthContext)
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
		const __DEV__ = window.location.hostname === 'localhost'


		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"event_id": eventID,
		"team_name": teamName,
		"team_members": teamMembers
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
		credentials: 'include'
		};

		const data = await fetch(`${host}/event/registration/team`, requestOptions)
		.then(response => response.json());

		// var myHeaders = new Headers();
		// myHeaders.append("Content-Type", "application/json");

		// var raw = JSON.stringify({
		// "event_id": eventID
		// });

		// var requestOptions = {
		// method: 'POST',
		// headers: myHeaders,
		// body: raw,
		// redirect: 'follow',
		// credentials: 'include'
		// };

		// const data = await fetch(`${host}/event/registration/solo`, requestOptions)
		// .then(response => response.json());
		// .then(result => console.log(result))
		// .catch(error => console.log('error', error));

		// fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
		// 	t.json()
		// )

		console.log('Proper', data)

		const options = {
			key: __DEV__ ? process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID : 'PRODUCTION_KEY',
			currency: "INR",
			amount: (data.payment_details.amount*100).toString(),
			order_id: data.payment_details.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                "razorpay_payment_id": response.razorpay_payment_id,
                "razorpay_order_id": response.razorpay_order_id,
                "razorpay_signature": response.razorpay_signature
                });

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
                credentials: 'include'
                };

                fetch(`${host}/event/registration/verification`, requestOptions)
                .then(res => res.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

				// console.log(response)
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
			},
			prefill: {
				name: userData.state.user.full_name,
				email: userData.state.user.email_id,
				phone_number: '7025482101',
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				onClick={teamEventRegistration}
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Donate $5
	// 			</a>
	// 		</header>
	// 	</div>
	// )
// }

export default teamEventRegistration