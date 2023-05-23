import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import img1 from '../../../assets/home/slide1.jpg'


const ChefRecommend = () => {
    return (
        <section >
            <SectionTitle heading='Chef recommends' subHeding='Should Try' />
            <div className='flex justify-center items-center space-x-20 mt-12'>
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <img className='h-52' src={img1} alt="Shoes" />
                    <div className="card-body bg-base-200 text-center flex flex-col justify-center items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-outline border-0 border-b-4 border-b-[#BB8506] text-[#BB8506] bg-gray-200 ">add to cart</button>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <img className='h-52' src={img1} alt="Shoes" />
                    <div className="card-body bg-base-200 text-center flex flex-col justify-center items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn bg-[#1F2937] text-[#BB8506]  ">add to cart</button>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <img className='h-52' src={img1} alt="Shoes" />
                    <div className="card-body bg-base-200 text-center flex flex-col justify-center items-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="btn btn-outline border-0 border-b-4 border-b-[#BB8506] text-[#BB8506] bg-gray-200 ">add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommend;