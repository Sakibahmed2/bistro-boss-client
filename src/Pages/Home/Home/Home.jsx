import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import Boss from '../Boss/Boss';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>


            {/* Banner section */}
            <Banner />

            {/* Category section */}
            <Category />

            {/* Bistro boss section */}
            <Boss />

            {/* Popular menu section  */}
            <PopularMenu />

            {/* Chef Recommends section */}
            <ChefRecommend />

            {/* Featured menu section */}
            <Featured />

            {/* Testimonials section */}
            <Testimonials />
        </div>
    );
};

export default Home;