import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = () => {
    return (
        <div className='mt-10 w-8/12  mx-auto shadow-md bg-[#f6f9fc] p-10'>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;