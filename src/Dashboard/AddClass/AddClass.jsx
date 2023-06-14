import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {

    const imgbbURL = `https://api.imgbb.com/1/upload?key=950e67bbdcf40404a0597e09b2cf811d`;
    let formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imgbbURL, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const updatedClass = {
            image: result.data.display_url,
            className: data.name,
            InstructorName: data.InstructorName,
            InstructorEmail: data.InstructorEmail,
            price: parseFloat(data.price),
            seats: parseInt(data.seats),
            status: "Pending",
            enrolledStudent: parseInt(0)
          };
          console.log(updatedClass)
          fetch("https://assignment-server-site-phi.vercel.app/add-class", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedClass),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Class Added successfully",
                  showConfirmButton: false,
                  timer: 2500,
                });
                // Navigate(from, { replace: true });
              }
            });
        }
      });
   
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-center text-3xl text-purple-800 my-5 font-bold">
        Add Class
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              placeholder="Class Image"
              
              {...register("image", { required: true })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor name: </span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              defaultValue={user?.displayName} readOnly
              className="input input-bordered"
              {...register("InstructorName", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="Instructor Email"
              defaultValue={user?.email} readOnly
              className="input input-bordered"
              {...register("InstructorEmail", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available seats</span>
            </label>
            <input
              type="number"
              placeholder="Available seats"
              className="input input-bordered"
              {...register("seats", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-neutral" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
