import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {
  const {user} = useAuth()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`https://assignment-server-site-phi.vercel.app/dashboard/payment-history/${user?.email}`);
    return res.json();
  });

  return (
    <div className="w-full p-4 ">
      <h2 className="text-2xl font-bold my-6 text-pink-400">Total Payment: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-500 text-white font-bold text-lg">
              <th></th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((payment, index) => <tr key={payment._id}>
                <th>{index +1}</th>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>{payment.price}/- Taka</td>
              </tr>)
            }
            
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
