import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Information from './Information';

const Informations = () => {

    const informations = [
        {
            _id: "1",
            image: clock,
            heading: "Opening Hours",
            description: "We are open from 9am to 6pm",
            bgColor: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            _id: "2",
            image: marker,
            heading: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            bgColor: "bg-accent"
        },
        {
            _id: "3",
            image: phone,
            heading: "Contact us now",
            description: "+000 123 456789",
            bgColor: "bg-gradient-to-r from-primary to-secondary"
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-[130px] mb-20 mx-3'>
            {
                informations.map(information => <Information
                    key={information._id}
                    information={information}
                ></Information>)
            }
        </div>
    );
};

export default Informations;