import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots } = appointmentOption;

    return (
        <div>
            <div className="card shadow-md">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
                    <p className='text-center '>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className='uppercase text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            htmlFor="appointment-modal"
                            className='btn border-none bg-gradient-to-r from-primary to-secondary text-white'
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Oppointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;