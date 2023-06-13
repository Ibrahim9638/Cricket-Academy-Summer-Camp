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
    {users.length}

    </div>
  );
};

export default SelectedClasses;
