import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AllUsers = () => {
useTitle('All Users');
const {data: users= [], refetch} = useQuery(['users'], async ()=>{
    const res = await fetch('http://localhost:5000/users')
    return res.json();
})


  return (
    <div>
        <h2>All Users : {users.length}</h2>
    </div>
  );
    
};

export default AllUsers;