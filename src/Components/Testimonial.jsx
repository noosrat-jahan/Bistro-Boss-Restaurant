import React from 'react';
import SectionTitle from './SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

// import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { FaQuoteLeft, FaRegStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const firstExample = {
    size: 30,
    value: 4,
    edit: false,
    activeColor: "#CD9003",
    filledIcon: <CiStar />
};


const Testimonial = () => {

    return (
        <div className='w-9/12 mx-auto'>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}>
            </SectionTitle>


            <div className='my-10'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    cssMode={true}
                    navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='flex flex-col items-center space-y-3 px-16'>
                            <ReactStars {...firstExample} />
                            <FaQuoteLeft className='text-5xl' />
                            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h2 className='text-3xl uppercase text-[#CD9003]'>JANE DOE</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex flex-col items-center space-y-3 px-16'>
                            <ReactStars {...firstExample} />
                            <FaQuoteLeft className='text-4xl' />
                            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h2 className='text-3xl uppercase text-[#CD9003]'>JANE DOE</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex flex-col items-center space-y-3 px-16'>
                            <ReactStars {...firstExample} />
                            <FaQuoteLeft className='text-4xl' />
                            <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <h2 className='text-3xl uppercase text-[#CD9003]'>JANE DOE</h2>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;