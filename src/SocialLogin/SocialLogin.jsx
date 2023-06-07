import React from 'react';
import { FcGoogle } from 'react-icons/Fc';

const SocialLogin = () => {
    return (
        <div>
      <div className="divider m-0"></div>
      <div className="w-full text-center my-3">
        <button
          
          className="btn btn-circle btn-outline"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;