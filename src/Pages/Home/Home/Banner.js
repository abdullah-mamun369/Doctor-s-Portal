import React from 'react';
import heroBanner from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import './Home.css';

const Banner = () => {
    return (
        <div className="lg:flex lg:flex-row-reverse px-3 lg:h-screen mt-20 mb-10 lg:mb-0 lg:mt-0 background-image lg:bg-cover">

            <div className='lg:w-5/6 my-auto'>
                <img src={heroBanner} alt="" />
            </div>
            <div className='my-auto pr-10'>
                <h1 className='font-bold text-4xl lg:text-6xl lg:leading-[70px] mt-5 text-accent'>Your New Smile Starts Here</h1>
                <p className='lg:my-8 my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default Banner;