import React from 'react';

const MenuCovers = ({title, subtitle,  img}) => {
    return (
        <div>
            <div
                className="hero h-[500px] "
                style={{ 
                    backgroundImage: `url("${img}")`,
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content  text-neutral-content text-center">
                    <div className=" bg-black p-5 h-[250px] bg-opacity-50 lg:w-[800px]  flex flex-col justify-center">
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold font-cinzel uppercase">{title}</h1>
                        <p className="mb-5 uppercase">
                           {subtitle}
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCovers;