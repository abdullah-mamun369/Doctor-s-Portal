import React from 'react';

const Information = ({ information }) => {

    const { image, heading, description, bgColor } = information;
    console.log(bgColor);

    return (
        <div>
            <div className={`card card-side shadow-xl ${bgColor} text-white py-12 px-6`}>
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Information;