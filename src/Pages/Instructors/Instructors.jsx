import { useQuery } from "@tanstack/react-query";
import React from "react";
import instructor from "../../assets/class/instructor.jpg";

const Instructors = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users/instructors");
    return res.json();
  });
  

  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img src={instructor} className="w-full h-[500px]" alt="Shoes" />
        </figure>
        <div className="card-body absolute ml-[600px] mt-[150px]">
          <p
            className="text-6xl text-white font-extrabold"
            style={{ textShadow: "2px 2px 8px #000000" }}
          >
            Instructor
          </p>
        </div>
      </div>

      <div className="my-6">
        <h2
          className="text-4xl p-4 mb-2"
          style={{ textShadow: "2px 2px 6px #000000" }}
        >
          All{" "}
          <span className="text-red-700 border-b-4 border-red-600 font-bold">
            Instructors
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10"  >
          {users.map((instructorInfo) => (
            
            <div key={instructorInfo._id} className="card bg-base-100 shadow-xl border h-[500px]" data-aos="zoom-out">
              <figure>
                <img
                  src={instructorInfo.photoUrl}
                  className="h-full w-full"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body" >
               <div className="border-l-4 rounded-md border-red-600">
               <h2 className="card-title ml-2">{instructorInfo.name}</h2>
                <p className="border-blue-700 font-bold  ml-2">Instructor/Coach</p>
                <p className="text-slate-400 font-bold  ml-2">{instructorInfo.email}</p>
               </div>
               <p className="text-slate-500 font-bold">Cricket is played between two teams, each consisting of eleven players</p>
     
                <div className="">
                  <button className="btn btn-primary w-full  border-0 border-b-4 rounded-md border-red-600">See Classes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
