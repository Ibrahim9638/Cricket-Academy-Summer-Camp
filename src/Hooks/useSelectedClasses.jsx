import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:selectedClasses=[], refetch} = useQuery({
        queryKey: ['selected-class', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classbyIntructor/${user?.email}`)
            return res.data
        }
      })
      return [selectedClasses, refetch]
   
};

export default useSelectedClasses;