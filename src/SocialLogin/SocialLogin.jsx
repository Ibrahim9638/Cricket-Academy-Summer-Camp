import React from 'react';
import { FcGoogle } from 'react-icons/Fc';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {googleSignIn} = useAuth();
  const navigate = useNavigate()
  const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result => {
      const googlLogged = result.user;
      console.log(googlLogged);
      navigate('/');
    })
    .catch(error =>console.log(error))

    
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