import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";


import Swal from "sweetalert2";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import "./styles.css";


const CheckoutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();
  const [processing, setProcessing] = useState(false);

const [selectedClasses, refetch] = useSelectedClasses()
  const totalPrice = selectedClasses.reduce((pre, cur) => pre + cur.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));
  console.log()
  useEffect(() => {

    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((result) => {
        setClientSecret(result.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  console.log(clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    } else {
      console.log(paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.name || "Anonymous",
          },
        },
      });

    if (confirmError) {
      Swal.error(confirmError.message);
    }
    setProcessing(false);
    console.log(paymentIntent)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      refetch()
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selectedClasses.length,
        cartId: selectedClasses.map((item) => item._id),
        classIds: selectedClasses.map((item) => item.classId),
     
      };
      axiosSecure.post("/payments/", payment).then((response) => {
        if (response.data.insertedResult.insertedId) {
            refetch()
          Swal.fire("success")
        }
      });
    }
  };

  return (
    <div className="w-full mx-auto bg-white p-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className=" w-44 mt-10">
          <button
            type="submit"
            className="btn btn-primary w-full  btn-sm "
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {transactionId && (
        <p className="text-green-600">
          Payment Successful <br /> Transaction Id: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;