import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-4/12 mx-auto space-y-3'>
            <p className='text-[#D99904] italic'>---{subHeading}---</p>
            <h3 className='text-4xl uppercase border-y-2 border-r-gray-600 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;