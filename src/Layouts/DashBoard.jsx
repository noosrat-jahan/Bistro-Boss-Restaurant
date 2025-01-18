import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FaAd, FaBook, FaCalendar, FaShoppingBag, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { TiBook, TiCalendar, TiContacts, TiHome, TiShoppingBag, TiShoppingCart, TiThList, TiThMenu } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const DashBoard = () => {

    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    console.log(isAdmin);

    // TODO: get admin value from the database.

    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu mt-5 text-lg">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><TiHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><TiThList /> Manage Items </NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><FaBook /> Manage Bookings </NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users </NavLink></li>
                        </>
                            : <>
                                <li><NavLink to="/dashboard/users"><TiHome /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><TiCalendar /> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><TiShoppingCart /> My Cart <span className='text-pink-200'>({cart.length})</span></NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaAd /> Add Review </NavLink></li>
                                <li><NavLink to="/dashboard/booking"><FaCalendar></FaCalendar> Add Booking </NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    {/* shared or common navlinks  */}
                    <li><NavLink to="/"><TiHome />  Home</NavLink></li>
                    <li><NavLink to="/menu"><TiThMenu /> Menu</NavLink></li>
                    <li><NavLink to="/shop/salad"><FaShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to="/contact"><BiSolidContact /> Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;