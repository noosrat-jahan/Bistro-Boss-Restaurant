import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [postal, setPostal] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card,
           
          });
      
          if (payload.error) {
            console.log('[error]', payload.error);
            setErrorMessage(payload.error.message);
            setPaymentMethod(null);
          } else {
            console.log('[PaymentMethod]', payload.paymentMethod);
            setPaymentMethod(payload.paymentMethod);
            setErrorMessage(null);
          }
        };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {      
                                backgroundColor: "#FFFFFF",                                                          
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#11efe3',
                            },
                        },
                    }}
                    className=" border rounded p-2 flex flex-col bg-white"
                />
                
                <button className='btn btn-secondary btn-sm my-5 w-full' type="submit" disabled={!stripe}>
                    PAY
                </button>
            </form>         
        </div>
    );
};

export default CheckoutForm;