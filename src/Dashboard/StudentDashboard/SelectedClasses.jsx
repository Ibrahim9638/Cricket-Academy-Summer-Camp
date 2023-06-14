import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

const SelectedClasses = () => {
  const {user}  = useAuth()

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`https://assignment-server-site-phi.vercel.app/select-classes/${user?.email}`);
    return res.json();
  });
 console.log(users.length);
  return (
    <div className="w-full ml-6">
      <div className="flex items-center">
        <p className="font-bold text-2xl mr-12">
          Total Class: {users.length}
        </p>
        <p>
          <Link to={"/dashboard/payment"} className="btn btn-primary">
            Pay{" "}
          </Link>
        </p>
      </div>
      
      <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-500 text-white font-bold text-lg">
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((selectClass, index) => <tr key={selectClass._id}>
                <th>{index +1}</th>
                <td>
                 
                <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={selectClass.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </div>
          
                 
                </td>
                <td>{selectClass.className}</td>
                <td>{selectClass.seats}</td>
                <td>{selectClass.price}/- Taka</td>
                <td>
                    <button className="btn btn-accent">Remove</button>
                </td>
              </tr>)
            }
            
         
          </tbody>
        </table>
      </div>

   
  );
};

export default SelectedClasses;
