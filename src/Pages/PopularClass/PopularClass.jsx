import { useQuery } from "@tanstack/react-query";
import React from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://assignment-server-site-phi.vercel.app/popular-classes");
    return res.json();
  });

  return (
    <div>
      <div className="py-8 p-4 ">
        <h2
          className="text-4xl p-4 mb-2"
          style={{ textShadow: "2px 2px 6px #000000" }}
        >
          Our{" "}
          <span className="text-red-700 border-b-4 border-red-600 font-bold">
            Popular
          </span>{" "}
          Class
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
          {users.map((classInfo) => (
            <PopularClassCard key={classInfo._id} classInfo={classInfo}></PopularClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
