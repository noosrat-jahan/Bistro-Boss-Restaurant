import React from 'react';
import { Helmet } from 'react-helmet';
import MenuCovers from '../Components/MenuCovers';
import topcover from '../assets/banner3.jpg'
import SectionTitle from '../Components/SectionTitle';
import MenuCategory from '../Components/MenuCategory';
import useMenu from '../Hooks/useMenu';

import dessertcover from '../assets/dessert-bg.jpeg'
import pizzacover from '../assets/pizza-bg.jpg'
import saladcover from '../assets/salad-bg.jpg'
import soupcover from '../assets/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === 'offered')
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')

    return (
        <div className='mb-5 '>

            {/* for dynamic page title  */}
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>

            {/* our menu page top cover  */}
            <MenuCovers
                img={topcover}
                title={'OUR MENU'}
                subtitle={'Would you like to try a dish?'}>
            </MenuCovers>

            <div className='my-10'>
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            </div>

            {/* offered menu category  */}

            <MenuCategory items={offered}></MenuCategory>


             {/* dessert menu category  */}
            <MenuCovers
                img={dessertcover}
                title={'DESSERTS'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </MenuCovers>           
            <MenuCategory items={dessert}></MenuCategory>


             {/* pizza menu category  */}
             <MenuCovers
                img={pizzacover}
                title={'PIZZA'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </MenuCovers>           
            <MenuCategory items={pizza}></MenuCategory>


             {/* salad menu category  */}
             <MenuCovers
                img={saladcover}
                title={'SALADS'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </MenuCovers>           
            <MenuCategory items={salad}></MenuCategory>


             {/* soup menu category  */}
             <MenuCovers
                img={soupcover}
                title={'SOUPS'}
                subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>
            </MenuCovers>           
            <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;