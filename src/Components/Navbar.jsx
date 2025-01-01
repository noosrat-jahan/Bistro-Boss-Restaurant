import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cart from '../assets/cart.png'


const Navbar = () => {

    const navlinks = <>
        <NavLink to="/">HOME</NavLink>        
        <NavLink to="/contact">CONTACT US</NavLink>             
        <NavLink to="/dashboard">DASHBOARD</NavLink> 
        <NavLink to="/menu">OUR MENU</NavLink>        
        <NavLink to="/shop">OUR SHOP</NavLink>              
        <NavLink to="/cart"><img src={cart} alt="" className='w-10' /></NavLink>          
    </>


    return (
        <div className="navbar bg-black bg-opacity-30 px-5 fixed z-10 flex justify-between">
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
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center space-x-5 font-bold text-white">
                    {navlinks}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default Navbar;