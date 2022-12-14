import React from 'react';

const Testimonial = ({ client }) => {

    const { name, image, message, address } = client;

    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl p-12">
                <p className='pb-12'>{message}</p>
                <div className='flex'>
                    <div className='pr-5 avatar'>
                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt="" />
                        </div>
                    </div>

                    <div className='my-auto'>
                        <h2 className="text-xl font-semibold text-accent">{name}</h2>
                        <p>{address}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;