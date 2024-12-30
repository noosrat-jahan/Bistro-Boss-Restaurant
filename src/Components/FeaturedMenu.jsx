import React from 'react';
import SectionTitle from './SectionTitle';

import featured from '../assets/featured.jpg'

const FeaturedMenu = () => {
    return (
        <div className='my-20 featurebg bg-fixed p-10 text-white'>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>

            <section className='flex items-center my-10 w-3/4 mx-auto gap-10'>
                <img src={featured} alt="" className='w-2/5' />
                <div className='text-white text-left space-y-2'>
                    <h2>March 20, 2023</h2>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button 
                    className=" btn btn-outline border-0 border-b-4 border-white text-white ">Read More</button>

                </div>
            </section>
        </div>
    );
};

export default FeaturedMenu;