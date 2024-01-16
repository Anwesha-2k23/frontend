dimport React from 'react'
import { useEffect } from 'react'
const Temp = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
    if (!rzpPaymentForm.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_NFgnsg7ivi0Gpd";
      rzpPaymentForm.appendChild(script);

    }
  });
  return (
    <div className="App" style={{marginTop: '50px'}}>
      <h1>Hello World!</h1>
      <form id="rzp_payment_form"></form>
      <h2>This line comes below the payment button</h2>
    </div>
  );
}

export default Temp
