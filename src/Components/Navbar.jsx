import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cart from '../assets/cart.png'
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { TiShoppingCart } from 'react-icons/ti';
import useCart from '../Hooks/useCart';


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Out Successfully",
                    showConfirmButton: false,
                    timer: 3500
                });
                navigate('/login')
            })
    }

    const navlinks = <>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
        <NavLink to="/menu">OUR MENU</NavLink>
        <NavLink to="/shop/salad">OUR SHOP</NavLink>
        <NavLink to="/secret">SECRET</NavLink>
        <Link to="/dashboard/cart">
            <button className="flex text-green-900 text-3xl rounded-full bg-amber-100 p-2">
                <TiShoppingCart />
                <div className="badge badge-secondary mt-3 -ml-2">+{cart.length}</div>
            </button>
        </Link>
    </>


    return (
        <div className="navbar  bg-black bg-opacity-30 px-5 fixed z-10 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <Link className='text-white'>BISTRO BOSS <br />
                    Restaurant</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center space-x-4 font-bold text-white">
                    {navlinks}

                </ul>
            </div>
            <div className="navbar-end text-white">

                {
                    user ?
                        <div>
                            <h1>{user.email}</h1>
                            <NavLink onClick={handleLogout} to="/login">LogOut</NavLink>
                        </div>
                        : <div>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;