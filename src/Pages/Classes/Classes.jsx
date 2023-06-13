import { useQuery } from "@tanstack/react-query";
import React from "react";
import ClassCard from "./ClassCard";
import classBanner from "../../assets/class/classBanner.jpg";

const Classes = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/approved-classes");
    return res.json();
  });

  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img src={classBanner} className="w-full h-[500px]" alt="Shoes" />
        </figure>
        <div className="card-body absolute ml-[600px] mt-[150px]">
         <p className="text-6xl text-white font-extrabold" style={{ textShadow: "2px 2px 8px #000000" }}>Classes</p> 
          
        </div>
      </div>

      <div className="my-6">
        <h2 className="text-4xl p-4 mb-2" style={{ textShadow: "2px 2px 6px #000000" }}>All <span className="text-red-700 border-b-4 border-red-600 font-bold">Active</span> Class</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
        {users.map((classInfo) => (
          <ClassCard key={classInfo._id} classInfo={classInfo}></ClassCard>
        ))}
        </div>
    
      </div>
    </div>
  );
};

export default Classes;
