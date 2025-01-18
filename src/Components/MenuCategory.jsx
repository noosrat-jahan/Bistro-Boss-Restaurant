import React from 'react';
import MenuCard from './MenuCard';
import { Link, useParams } from 'react-router-dom';

const MenuCategory = ({items, title}) => {

    

    return (
        <div className='my-16'>
            <section className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 my-10'>
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </section>

            <Link to={`/shop/${title}`} className=" btn btn-outline border-0 border-b-4 border-black ">ORDER YOUR FAVOURITE FOOD</Link>
        </div>
    );
};

export default MenuCategory;