import React, { useState } from 'react';

import MenuCovers from '../Components/MenuCovers';
import shopcover from '../assets/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet';
import useMenu from '../Hooks/useMenu';
import FoodCard from '../Components/FoodCard';
import { useParams } from 'react-router-dom';

const OurShop = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()

    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);

    
    
    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === 'offered')
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    const drinks = menu.filter(menu => menu.category === 'drinks')

    return (
        <div className=''>
            <Helmet>
                <title>Bistro Boss || Our Shop</title>
            </Helmet>

            <MenuCovers
                img={shopcover}
                title={'OUR SHOP'}
                subtitle={'Would you like to try a dish?'}>
            </MenuCovers>

            <div className='my-10'>

            </div>

            <div className='w-9/12 mx-auto my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;