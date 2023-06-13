import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import CheckoutForm from "./CheckOutForm";


// todo: need to filling in .eve file
const stripePromise = loadStripe(
  "pk_test_51NIW2PF03mBWkwUf7Qxo5HYkl03aYWk5zzNv8Lgatq6pVu1IPKXBLRHtyMQY8WJeFlALtJsLYzAerPJfeFBLTmEw003zMzd2xu"
);
const Payment = () => {

  return (
    <div className="w-full">
        <h1 className="text-2xl text-red-400 font-bold ml-[40px] mt-10">Payment</h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;