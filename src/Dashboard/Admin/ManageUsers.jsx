import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/Ai";
import { FaUserShield } from 'react-icons/Fa';
import { LuUsers } from 'react-icons/Lu';
import Swal from "sweetalert2";

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
      });

    const handleMakeAdmin = (user)=>{
        fetch(`http://localhost:5000/users-makeAdmin/${user.email}`,{
            method: "PATCH"
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.email} is now admin`,
                showConfirmButton: false,
                timer: 1500
              })
            }
      
          })
    }

    const handleMakeInstructor = (user)=>{
        fetch(`http://localhost:5000/users-makeInstructor/${user.email}`,{
            method: "PATCH"
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.email} is now admin`,
                showConfirmButton: false,
                timer: 1500
              })
            }
      
          })
    }

    const handleDelete = user => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${user.email}`,{
              method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
              if(data.deletedCount > 0){
                  refetch();
                  Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
              } 
            })
  
          }
        })
    };

  return (
   <div className="w-full">
     <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin/Instructor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {
                        user.role === 'admin'? 'admin':   
                        <button
                        onClick={() => handleMakeAdmin(user)}
                        className=" btn-ghost btn-sm rounded-md bg-slate-500 text-white text-xl mr-4"
                      >
                        {" "}
                        <FaUserShield></FaUserShield>
                        
                      </button>
                    }
                                  {
                        user.role === 'instructor'? 'instructor':   
                        <button
                        onClick={() => handleMakeInstructor(user)}
                        className=" btn-ghost btn-sm rounded-md bg-slate-700 text-white text-xl ml-2"
                      >
                        {" "}
                        <LuUsers></LuUsers>
                        
                      </button>
                    }
                </td>
                <td>
                <button
                    onClick={() => handleDelete(user)}
                    className=" btn-ghost btn-sm rounded-md bg-red-600 text-white text-xl"
                  >
                    {" "}
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>)
          }
 
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default ManageUsers;
