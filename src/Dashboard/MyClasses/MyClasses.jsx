import React, { useEffect } from "react";
import useTitle from "../../Hooks/useTitle";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { AiFillDelete } from "react-icons/Ai";

const MyClasses = () => {
  useTitle("My Classes");
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/class/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center text-purple-800 my-5">
        All My Classes here: {classes.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-black text-white bg-opacity-60">
              <th>Serial</th>
              <th>Image</th>
              <th>Instructor Name</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled Student</th>
              <th>Feedback & Update</th>
            </tr>
          </thead>
          <tbody>

            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClass.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{singleClass.InstructorName}</td>
                <td>{singleClass.className}</td>
                <td>{singleClass.status}</td>
                <td>{singleClass.enrolledStudent}</td>
                <td>
                  <button className="uppercase text-[12px] btn-ghost btn-sm rounded-md bg-slate-500 text-white mr-2">
                    Feedback
                  </button>
                  <button className="uppercase text-[12px]  btn-ghost btn-sm rounded-md bg-slate-700 text-white ml-2">Update</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
