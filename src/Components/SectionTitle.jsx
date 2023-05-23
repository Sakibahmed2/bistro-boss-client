import React from 'react';

const SectionTitle = ({heading, subHeding}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto'>
            <p className='text-[#D99904] '>--{subHeding}--</p>
            <h3 className='text-3xl font-semibold uppercase border-y-4 py-3 mt-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;