import React from 'react';
import MenuCard from './MenuCard';

const MenuCategory = ({items}) => {

    
    return (
        <div className='my-16'>
            <section className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 my-10'>
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </section>

            <button className=" btn btn-outline border-0 border-b-4 border-black ">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;