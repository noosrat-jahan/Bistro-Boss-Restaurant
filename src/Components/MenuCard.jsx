import React from 'react';

const MenuCard = ({ item }) => {
    return (
        <div>
            <div className='flex items-start gap-3'>
                <img src={item.image} alt="" className='w-28 h-24' style={{borderRadius: '0px 200px 200px 200px'}} />
                <div className='text-left'>
                    <h1 className='font-cinzel'>{item.name}-------------</h1>
                    <p className='text-sm'>{item.recipe}</p>
                </div>
                <p className='text-[#BB8506] w-1/4'>$ {item.price}</p>
            </div>
        </div>
    );
};

export default MenuCard;