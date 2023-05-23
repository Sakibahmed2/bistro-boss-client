import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white  my-20'>
            <div className='bg-black bg-opacity-60 pt-8'> 
                <SectionTitle heading='featured item' subHeding='Check it out' />
                <div className='md:flex justify-center items-center px-36 pt-12 pb-20'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 19, 2025</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quasi excepturi consequuntur numquam cupiditate, officiis voluptates perferendis. Voluptatum eaque nobis doloribus asperiores, laudantium placeat magnam? Facilis molestiae aspernatur atque hic dolore laborum quis deserunt nobis alias quisquam maxime nemo, distinctio perferendis? Perferendis ab cumque dolor, magnam voluptatem mollitia quae ea?</p>
                        <button className='btn btn-outline border-0 border-b-4  border-white text-white mt-4 shadow-2xl'>Order now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;