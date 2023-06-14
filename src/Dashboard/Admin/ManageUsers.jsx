import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/Ai";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://assignment-server-site-phi.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://assignment-server-site-phi.vercel.app/users-makeAdmin/${user.email}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.email} is now admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://assignment-server-site-phi.vercel.app/users-makeInstructor/${user.email}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.email} is now admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-server-site-phi.vercel.app/users/${user.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center text-purple-800 my-5">
        Manage All Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-black text-white bg-opacity-60">
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="uppercase text-[10px] btn-ghost btn-sm rounded-md bg-primary text-white  mr-4"
                    >
                      {" "}
                      Make-Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="uppercase text-[10px]  btn-ghost btn-sm rounded-md bg-orange-400 text-white ml-2"
                    >
                      {" "}
                      Make-Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className=" btn-ghost btn-sm rounded-md bg-red-600 text-white"
                  >
                    {" "}
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
