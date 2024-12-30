import React from 'react';
import Banner from '../Components/Banner';
import FoodCategory from '../Components/FoodCategory';
import BistroCard from '../Components/BistroCard';
import FromMenu from '../Components/FromMenu';
import CallUs from '../Components/CallUs';
import ChefRecommend from '../Components/ChefRecommend';
import FeaturedMenu from '../Components/FeaturedMenu';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <BistroCard></BistroCard>
            <FromMenu></FromMenu>
            <CallUs></CallUs>
            <ChefRecommend></ChefRecommend>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;