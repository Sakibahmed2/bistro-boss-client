import React from 'react';

const MenuItem = ({item}) => {

    const {recipe, image, price, name} = item;

    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 150px 150px 150px'}} className='w-[100px] ' src={image} alt="" />
            <div className='w-2/3'>
                <h2 className='uppercase '>{name}-----------------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>$ {price}</p>
        </div>
    );
};

export default MenuItem;