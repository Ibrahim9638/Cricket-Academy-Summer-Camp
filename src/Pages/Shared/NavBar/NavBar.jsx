import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const {user, logOut} = useAuth();


  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error =>console.log(error))

  }

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-lg font-extrabold" 
        style={{ textShadow: "2px 2px 4px #000000" }}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/popular-instructor"
          className="text-lg font-bold"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className="text-lg font-bold"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          Classes
        </Link>
      </li>
       {
        user ? 
        <>   
         <li>
          <Link to="/dashboard" className="text-lg font-bold" 
          style={{ textShadow: "2px 2px 4px #000000" }}>
            Dashboard
          </Link>
         </li>
       
        <li>
          <img style={{width:'55px', height:'55px', borderRadius:'50%'}}
            src={user?.photoURL} alt="" title={user?.displayName} />
        </li>
        <li>
          <p onClick={handleLogOut}  className="text-lg font-bold"
            style={{ textShadow: "2px 2px 4px #000000" }}>Logout</p>
        </li>
         
        </> : 
        <>
         <li>
          <Link to='/login' className="text-lg font-bold"
          style={{ textShadow: "2px 2px 4px #000000" }}>Login
          </Link>
        </li>
        </>
       }
    
    </>
  );
  return (
    
    <div className="navbar  bg-black z-10 bg-opacity-30  h-36  fixed text-white max-w-screen-2xl p-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex justify-center items-center">
        <div className="w-12">
        <img 
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            src={logo}
            alt=""
          />
        </div>
         <div className="mt-[-40px] lg:m-0 md:m-0 ">
         <Link to='/'>
            <p className="btn btn-ghost normal-case lg:mr-[-400px] lg:mb-[20px] lg:text-2xl text-lg  " style={{ textShadow: "2px 2px 4px #000000" }}>
              Roy Cricket <br />
              Academy
            </p>
          </Link>
         </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-0 bg-black btn-lg text-white" style={{ textShadow: "2px 2px 4px #000000" }}>Sports</a>
      </div>
    </div>
  );
};

export default NavBar;
