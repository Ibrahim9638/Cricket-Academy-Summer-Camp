import React from 'react';
import { FcGoogle } from 'react-icons/Fc';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {googleSignIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {name: loggedUser.displayName, email: loggedUser.email};

      fetch('http://localhost:5000/users',{
              method: 'POST',
              headers:{
                'content-type': 'application/json',
              },
              body: JSON.stringify(saveUser)
            })
            .then(res=> res.json())
            .then(() =>{
                navigate(from, { replace: true });
            })
    })
    .catch((err)=>console.log(err))

    
  }

    return (
        <div>
      <div className="divider m-0"></div>
      <div className="w-full text-center my-3">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FcGoogle className="text-2xl"></FcGoogle>
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;