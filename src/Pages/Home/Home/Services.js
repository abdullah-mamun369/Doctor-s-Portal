import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: "1",
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: fluoride
        },
        {
            _id: "2",
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: cavity
        },
        {
            _id: "3",
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: whitening
        }
    ]

    return (
        <div className='mx-3'>
            <div className='text-center mb-[70px]'>
                <h3 className='text-xl font-bold text-primary mb-2'>OUR SERVICES</h3>
                <h2 className='text-4xl text-accent'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-[130px] mb-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;