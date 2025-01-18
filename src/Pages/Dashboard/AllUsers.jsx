import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })


    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure you want to remove user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
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
        <div className='bg-[#f2f0f08b] pb-10 min-h-screen'>
            <div className='py-10'>
                <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many??"}></SectionTitle>
            </div>

            <div className='bg-white p-5 w-3/4 mx-auto space-y-5'>
                <h1 className='text-4xl uppercase'>Total Users: {users.length}</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] rounded-t-xl text-white '>
                            <tr>
                                <th> </th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th className='text-[#D1A054] text-lg'>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>

                                    <td>
                                        { user.role == 'admin' ? 'Admin': <button onClick={() => { handleMakeAdmin(user) }}
                                            className="btn  text-base bg-[#D1A054] text-white"><FaUsers />
                                        </button>}
                                    </td>
                                    <th>
                                        <button onClick={() => { handleDeleteUser(user) }} className="btn  text-base bg-[#B91C1C] text-white"><FaTrashAlt /></button>
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

export default AllUsers;