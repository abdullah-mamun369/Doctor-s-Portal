import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonial from './Testimonial';
import quote from '../../../assets/icons/quote.svg'

const Testimonials = () => {

    const clients = [
        {
            _id: 1,
            name: 'Mamun Abdullah',
            image: people1,
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Comilla'
        },
        {
            _id: 2,
            name: 'Noman Abdulla',
            image: people2,
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Dhaka'
        },
        {
            _id: 3,
            name: 'Nasim Shishir',
            image: people3,
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'Noakhali'
        }
    ]

    return (
        <div className='px-5'>
            <div className='flex justify-between mb-16'>
                <div className='my-auto' >
                    <h4 className='font-bold text-xl text-secondary mb-5'>Testimonial</h4>
                    <h2 className='font-bold text-3xl lg:text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 mb-[70px]'>
                {
                    clients.map(client => <Testimonial
                        key={client._id}
                        client={client}
                    ></Testimonial>)
                }
            </div>
        </div >
    );
};

export default Testimonials;