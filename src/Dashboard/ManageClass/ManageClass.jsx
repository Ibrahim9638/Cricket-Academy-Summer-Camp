import React from "react";
import useTitle from "../../Hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClass = () => {
  useTitle("Manage-Class");

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/all-classes");
    return res.json();
  });

  const handleApprove = (id)=>{
    axios.patch(`http://localhost:5000/approve-class/${id}`, {status:"approved"})
    .then(res=>{
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire(
          'Approved!',
          'You clicked the button!',
          'success'
        )
      }
    })
  }
  const handleDeny = (id)=>{
    axios.patch(`http://localhost:5000/denied-class/${id}`, {status:"denied"})
    .then(res=>{
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire(
          'Denied!',
          'You clicked the button!',
          'success'
        )
      }
    })
  }

  const handleFeedback = async (id)=>{
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      axios.patch(`http://localhost:5000/feedback-class/${id}`, {feedback: text})
      .then(res=>{
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire(
            'Update Feedback!',
            'You clicked the button!',
            'success'
          )
        }
      })
    }
    
  }
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center text-purple-800 my-5">
        All The Instructor Class: {users.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-black text-white text-md bg-opacity-60 text-center">
              <th>Serial</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{user.className}</td>
                <td>{user.InstructorName}</td>
                <td>{user.InstructorEmail}</td>
                <td>{user.seats}</td>
                <td>{user.price}/- Taka</td>
                <td>{user.status}</td>
                <td>
                <div className="flex justify-between items-center">
                
                  <button disabled={user.status === "approved"} onClick={()=>handleApprove(user._id)} className="uppercase text-[12px] btn-ghost btn-sm rounded-md bg-slate-500 text-white mr-2">
                    Approve
                  </button>
                  <button disabled={user.status === "denied"} onClick={()=>handleDeny(user._id)} className="uppercase text-[12px]  btn-ghost btn-sm rounded-md bg-slate-700 text-white">
                    Deny
                  </button>
                  <button onClick={()=> handleFeedback(user._id)} className="uppercase text-[12px]  btn-ghost btn-sm rounded-md bg-slate-500 text-white">
                    Feedback
                  </button>
                </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
