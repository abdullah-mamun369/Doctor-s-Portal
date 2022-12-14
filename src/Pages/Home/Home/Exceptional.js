import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

const Exceptional = () => {
    return (
        <div className='lg:mb-[200px] mb-[100px]'>
            <div className='lg:grid grid-cols-2 lg:px-36 px-5'>
                <div className='lg:mr-28 mx-auto mb-5'>
                    <img className='rounded-lg' src={treatment} alt="" />
                </div>
                <div className='my-auto'>
                    <h1 className='text-4xl lg:text-6xl font-bold '>Exceptional Dental Care, on Your Terms</h1>
                    <p className='my-5 lg:my-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;