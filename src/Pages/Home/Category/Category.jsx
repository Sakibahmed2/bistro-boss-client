import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from '../../../Components/SectionTitle';



const Category = () => {
    return (
        <section className='mt-12'>
            <SectionTitle
                heading={'Order online'}
                subHeding={' From 11:00am to 10:00pm '}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-32 mt-12 w-10/12 mx-auto"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-4xl text-center -mt-24 text-white drop-shadow-xl shadow-black uppercase'>Salad</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-4xl text-center -mt-24 text-white drop-shadow-xl shadow-black uppercase'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-4xl text-center -mt-24 text-white drop-shadow-xl shadow-black uppercase'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-4xl text-center -mt-24 text-white drop-shadow-xl shadow-black uppercase'>desserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-4xl text-center -mt-24 text-white drop-shadow-xl shadow-black uppercase'>Salad</h4>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;