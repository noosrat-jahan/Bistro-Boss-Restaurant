import React from 'react';
import SectionTitle from './SectionTitle';

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const ChefRecommend = () => {
    return (
        <div>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}>
            </SectionTitle>

            <section className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 w-9/12 mx-auto'>
                <div className=" card bg-base-100  shadow-xl p-1">
                    <figure className="px-4 pt-4">
                        <img
                            src={slide1}
                            alt="Shoes"
                            className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline uppercase 
                            text-[#BB8506] border-0 border-b-4 border-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="px-4 pt-4">
                        <img
                            src={slide2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline uppercase 
                            text-[#BB8506] border-0 border-b-4 border-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure className="px-4 pt-4">
                        <img
                            src={slide3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline uppercase 
                            text-[#BB8506] border-0 border-b-4 border-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChefRecommend;