import React, { useState } from 'react';
import { TiDelete, TiShoppingCart } from 'react-icons/ti';
import SectionTitle from '../../Components/SectionTitle';
import useCart from '../../Hooks/useCart';
import { MdDelete } from 'react-icons/md';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure, { axiosSecure } from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart, refetch] = useCart()
    

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure you want to remove item from cart?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/cart/${id}`)
                .then(res => {
                    // console.log(res.data);
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    }
                })
               
            }
        });
    }

    return (
        <div className='bg-[#f2f0f08b] pb-10'>
            <div className='py-10'>
                <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"}></SectionTitle>
            </div>

            <div className='bg-white p-5 w-3/4 mx-auto space-y-5'>
                <div className='flex justify-around items-center text-xl font-cinzel font-extrabold rounded-md'>
                    <h1>TOTAL ORDERS: {cart.length}</h1>
                    <h1>TOTAL PRICE: $ {totalPrice}</h1>
                    {
                        cart.length ? <Link to="/dashboard/payment" ><button  className='btn bg-[#D1A054]   text-white font-semibold'>PAY</button></Link> : 
                        <button disabled  className='btn bg-[#D1A054]   text-white font-semibold'>PAY</button>
                    }
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] rounded-t-xl text-white '>
                            <tr>
                                <th>

                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((cartitem, index) => <tr key={cartitem._id}>
                                    <th className='text-[#D1A054] text-lg'>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={cartitem.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {cartitem.name}
                                    </td>
                                    <td>
                                        $ {cartitem.price}
                                    </td>
                                    <th>
                                        <button onClick={() => { handleDelete(cartitem._id) }} className="btn  text-base bg-[#B91C1C] text-white"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;