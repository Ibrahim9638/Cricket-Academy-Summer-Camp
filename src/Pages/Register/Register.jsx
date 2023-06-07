import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Login/login.jpg';

const Register = () => {
    return (
     
        <div className="hero min-h-screen bg-[#ecf4fb] ">
          <div className="hero-content flex-col lg:flex-row mt-28">
            <div className="w-full mr-14 pl-8 mt-10">
              <img className='rounded  h-[420px]' src={logo} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Register</h1>
                <form >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="link"
                      placeholder="Photo URL"
                      name="photo"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="text-center">Have you already an account? <Link to='/login' className='text-[#c22373] font-bold' >Login</Link> </p>
              </div>
            </div>
          </div>
        </div>
     
    );
};

export default Register;