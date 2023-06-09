import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className='pt-12'>
            {title && <Cover img={img} title={title} />}

            <div className='grid md:grid-cols-2 gap-6 my-12 w-10/12 mx-auto'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 mt-4 '>
                    Order now
                </button>
            </Link>

        </div>
    );
};

export default MenuCategory;