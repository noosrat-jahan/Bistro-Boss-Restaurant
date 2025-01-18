import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () => {

    // tan stack query

    const {user} = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
           
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;

// api, axios (axiossecure), tan stack