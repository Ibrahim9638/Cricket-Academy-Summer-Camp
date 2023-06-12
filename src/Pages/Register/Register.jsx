import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Login/login.jpg";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { set, useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { BsFillEyeFill } from "react-icons/Bs";


const Register = () => {
  const {register,handleSubmit,formState: { errors }, reset} = useForm();
  const navigate = useNavigate();
  const [show, setShow]= useState(false);
  const [confirmShow, setConfirmShow]= useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser, updateUserProfile } = useAuth();
  const onSubmit = (data) => {
    createUser(data.email, data.password, data.confirmPassword)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(data.name, data.photo)
          .then(() => {

            if(data.password !== data.confirmPassword){
              alert("Password does not match");
              return;
            }
            const saveUser = {name:data.name, email:data.email, photoUrl:data.photo, password:data.password}
            fetch('http://localhost:5000/users',{
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data =>{
              if(data.insertedId){
                reset();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'User Registration successfully',
                showConfirmButton: false,
                timer: 2500
              })
              navigate(from, { replace: true });
              }
            })

          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-[#ecf4fb] ">
      <div className="hero-content flex-col lg:flex-row mt-28">
        <div className="w-full mr-14 pl-8 mt-10">
          <img className="rounded  h-[420px]" src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm mt-10 shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="link"
                  placeholder="Photo URL"
                  {...register("photo", { required: true })}
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">
                    PhotoURL field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? 'text': 'password'}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                <p className="text-2xl absolute lg:mt-[50px] lg:ml-[290px] ml-[247px] mt-[50px]" onClick={()=>setShow(!show)}>
                  <small>
                    {
                      show ? 
                      <span>
                      <BsFillEyeFill></BsFillEyeFill>
                      </span>:
                       <span>
                        <BsFillEyeFill></BsFillEyeFill>
                       </span>
                    }
                  </small>
                </p>
                {errors.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password at least 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password at least One Uppercase and One lowercase and One
                    number and One special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type= {confirmShow ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  onChange={(e) =>setConfirmPassword(e.target.value)}
                  className="input input-bordered"
                />
                      <p className="text-2xl absolute lg:mt-[50px] lg:ml-[290px] ml-[247px] mt-[50px]" onClick={()=>setConfirmShow(!confirmShow)}>
                  <small>
                    {
                      show ? 
                      <span>
                      <BsFillEyeFill></BsFillEyeFill>
                      </span>:
                       <span>
                        <BsFillEyeFill></BsFillEyeFill>
                       </span>
                    }
                  </small>
                </p>
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-600">
                    Confirm Password field is required
                  </span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-red-600">Password at least 6 character</p>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    Password at least One Uppercase and One lowercase and One
                    number and One special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center">
              Have you already an account?{" "}
              <Link to="/login" className="text-[#c22373] font-bold">
                Login
              </Link>{" "}
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
