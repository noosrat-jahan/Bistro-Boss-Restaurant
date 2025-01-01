import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import axios from 'axios';
import MenuCard from './MenuCard';
import useMenu from '../Hooks/useMenu';

const FromMenu = () => {

    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     axios.get('menu.json')
    //     .then(res => {
    //         const data = res.data            
    //         const popularMenu = data.filter(menu => menu.category === 'popular')
    //         setMenu(popularMenu)            
    //     })
    // },[])

    const [menu] = useMenu()
    const popularMenu = menu.filter(menu => menu.category === 'popular')


    return (
        <div className='w-9/12 mx-auto'>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}>
            </SectionTitle>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-20 my-10'>
                {
                    popularMenu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </section>

            <button className=" btn btn-outline border-0 border-b-4 border-black ">View Full  Menu</button>
        </div>
    );
};

export default FromMenu;