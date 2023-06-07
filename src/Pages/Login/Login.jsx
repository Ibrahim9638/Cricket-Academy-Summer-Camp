import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import logo from "../../assets/Login/login.jpg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-[#ecf4fb]">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="w-full mr-14 pl-8 lg:m-0 mt-36">
          <img className="rounded  h-[420px]" src={logo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-center text-xl font-bold">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
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
