import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../Hooks/useTitle";

const AllUsers = () => {
  useTitle("All Users");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://assignment-server-site-phi.vercel.app/users");
    return res.json();
  });

  return (
      <div className="w-full p-4 my-4">
        <h2 className="text-2xl font-semibold">All Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default AllUsers;
