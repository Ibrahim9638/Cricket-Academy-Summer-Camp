import React from "react";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SelectedClasses = () => {
  const [selectedClasses] = useSelectedClasses();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/select-classes");
    return res.json();
  });

  return (
    <div className="w-full ml-6">
      <div className="flex items-center">
        <p className="font-bold text-2xl mr-12">
          Total Class: {selectedClasses.length}
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
                <td>{selectClass.enrolledStudent}</td>
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
