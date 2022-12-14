import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';
import './Home.css'

const Appointment = () => {
    return (
        <div className='lg:grid grid-cols-2 lg:px-36 px-5 background-image-appointment p-10 lg:p-0 mx-5 lg:mx-0 mb-[70px]'>
            <div className='hidden lg:grid'>
                <img className='-mt-32 pl-16' src={doctor} alt="" />
            </div>
            <div className='my-auto'>
                <h4 className='font-bold text-xl text-secondary mb-5'>Appointment</h4>
                <h2 className='font-bold text-3xl lg:text-4xl text-white'>Make an appointment Today</h2>
                <p className='my-5 text-white lg:pr-28'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>

        </div>
    );
};

export default Appointment;