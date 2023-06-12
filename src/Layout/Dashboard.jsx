import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FcHome } from 'react-icons/Fc';
import { SlCalender } from 'react-icons/Sl';
import { FaWallet, FaBook, FaUsers } from 'react-icons/Fa';
import { AiOutlineMenu } from 'react-icons/Ai';
import { MdClass } from 'react-icons/Md';
import { SiGoogleclassroom } from 'react-icons/Si';


const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;

    return (
      <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
    
        {/* Page content here */}
        <Outlet></Outlet>
    
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-[#ecf4fb] text-xl">
        {
          isAdmin ? 
          <>
          <li><NavLink to="/dashboard"><FcHome></FcHome>Admin Home</NavLink></li>
          <li><NavLink to="/"><SiGoogleclassroom></SiGoogleclassroom>Manage Classes</NavLink></li>
          <li><NavLink to="/dashboard/admin/manage-users"><FaBook></FaBook>Manage Users</NavLink></li>
          <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li> 
         
          </>: isInstructor ?  <>

          <li><NavLink to="/dashboard"><FcHome></FcHome>Instructor Home</NavLink></li>
          <li><NavLink to="/dashboard/addClass"><SiGoogleclassroom></SiGoogleclassroom>Add Class</NavLink></li>
          <li><NavLink to="/dashboard/myClasses"><MdClass></MdClass>My Classes</NavLink></li>
          
          </>:
          
          <>
          {/* Sidebar content here */}
          <li><NavLink to="/"><FcHome></FcHome>Student Home</NavLink></li>
          <li><NavLink to="/"><SlCalender></SlCalender>My Selected Classes</NavLink></li>
          <li><NavLink to="/"><SlCalender></SlCalender>My Enrolled Classes</NavLink></li>
          <li><NavLink to="/"><FaWallet></FaWallet>Payment History</NavLink></li>
         
          </>
        }
    
          
          
          <div className="divider"></div>
    
          <li><NavLink to='/'><FcHome></FcHome>Home</NavLink></li>
          <li><NavLink to='/popular-instructor'><AiOutlineMenu></AiOutlineMenu>Instructors</NavLink></li>
          <li><NavLink to='/classes'><MdClass></MdClass>Classes</NavLink></li>
        </ul>
      
      </div>
    </div>
    );
};

export default Dashboard;