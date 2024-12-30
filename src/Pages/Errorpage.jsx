import React from 'react';
import error from "../assets/404.gif"
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='flex justify-center items-center h-screen '>
            <Link to="/" className='btn btn-info text-white font-semibold text-lg'>⬅️ Back To Home</Link>
            <img src={error} alt="" className='h-screen' />
        </div>
    );
};

export default Errorpage;