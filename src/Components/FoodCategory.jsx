import React from 'react';
import SectionTitle from './SectionTitle';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'

const FoodCategory = () => {
    return (
        <div className='my-10 w-9/12 mx-auto'>
            <SectionTitle
                heading={'ORDER ONLINE'}
                subHeading={'---From 11:00am to 10:00pm---'}>
            </SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide className='flex justify-center' style={{ width: 270 }}>
                    <img src={slide1} alt="" />
                    <div className='bg-red-700  -mt-20' style={{ zIndex: 10 }}>
                        <h2 className='uppercase text-orange-500 font-bold'>salads</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ width: 270 }}>
                    <img src={slide2} alt="" />
                    <h2 className='uppercase text-orange-500 font-bold -mt-20'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide style={{ width: 270 }}>
                    <img src={slide3} alt="" />
                    <h2 className='uppercase text-orange-500 font-bold -mt-20'>soups</h2>
                </SwiperSlide>
                <SwiperSlide style={{ width: 270 }}>
                    <img src={slide4} alt="" />
                    <h2 className='uppercase text-orange-500 font-bold -mt-20'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide style={{ width: 270 }}>
                    <img src={slide5} alt="" />
                    <h2 className='uppercase text-orange-500 font-bold -mt-20'>salads</h2>
                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default FoodCategory;