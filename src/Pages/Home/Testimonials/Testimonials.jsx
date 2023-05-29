import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";



const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className='w-10/12 mx-auto'>
            <SectionTitle heading='Testimonials' subHeding='What Our Clients Say' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._idd}
                    >
                        <div className='w-9/12 mx-auto flex flex-col items-center justify-center text-center mt-12'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='mt-8'>{review.details}</p>
                            <p className='text-2xl text-[#CD9003] mt-4'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;