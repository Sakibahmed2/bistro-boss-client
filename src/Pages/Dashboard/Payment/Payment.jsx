import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Chackout from './Chackout';
import useCart from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_payment_gatawy_PK);

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price ,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl">Taka o taka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <Chackout price={price} />
            </Elements>
        </div>
    );
};

export default Payment;