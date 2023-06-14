import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
    const {user} = useAuth()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await fetch(`https://assignment-server-site-phi.vercel.app/enrolledClasses/${user?.email}`);
      return res.json();
    });

    return (
        
            
<div className="w-full flex items-center p-24 ">
      <h2 className="text-2xl font-bold my-6 text-pink-400">Total Enrolled: {users.length}</h2>
     
    </div>

         
    );
};

export default EnrolledClasses;