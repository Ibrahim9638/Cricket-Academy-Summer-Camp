import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/users`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }, [])
    return (
        <div>
        {users.length}
        </div>
    );
};

export default ManageUsers;