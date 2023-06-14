import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import logo from "../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { BsFillEyeFill } from "react-icons/Bs";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const [show, setShow] = useState(false);
  useTitle('Login')

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-[#ecf4fb]">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="w-full mr-14 pl-8 lg:m-0 mt-36">
          <img className="rounded  h-[420px]" src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-center text-xl font-bold">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered border-gray-400"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? 'text' : 'password'}
                {...register("password")}
                placeholder="Password"
                className="input input-bordered border-gray-400"
              />
              <p className='text-2xl absolute lg:mt-[50px] lg:ml-[290px] ml-[247px] mt-[50px]' onClick={() => setShow(!show)}>
                <small>
                  {show ? (
                    <span>
                      <BsFillEyeFill></BsFillEyeFill>
                    </span>
                  ) : (
                    <span>
                      <BsFillEyeFill />
                    </span>
                  )}
                </small>
              </p>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary border-0"
                type="submit"
                value="Login"
              />
            </div>
            <p className="text-orange-400 text-center m-0">
              <small>
                New Here?{" "}
                <Link to="/register" className=" font-bold">
                  Create a New Account
                </Link>
              </small>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
