import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Login/login.jpg';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    
    return (
     
        <div className="hero min-h-screen bg-[#ecf4fb] ">
          <div className="hero-content flex-col lg:flex-row mt-28">
            <div className="w-full mr-14 pl-8 mt-10">
              <img className='rounded  h-[420px]' src={logo} alt="" />
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
                    {errors.name && <span className='text-red-600'>Name field is required</span>}
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
                    {errors.photo && <span className='text-red-600'>PhotoURL field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: 'Email Address is required' })}
                      className="input input-bordered"
                    />
                     {errors.email && <span className='text-red-600'>Email field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.password && <span className='text-red-600'>Password field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("password", { required: true })}
                      className="input input-bordered"
                    />
                    {errors.password && <span className='text-red-600'>Confirm Password field is required</span>}
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
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
     
    );
};

export default Register;