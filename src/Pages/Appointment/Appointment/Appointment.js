import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBody/AppointmentBanner';
import AvailableDate from '../AppointmentBody/AvailableDate';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate);
    return (
        <div>
            {/* This Is Banner */}
            <section className='container mx-auto'>
                <AppointmentBanner
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></AppointmentBanner>
            </section>


            {/* This Is AppointmentDate */}
            <section>
                <AvailableDate
                    selectedDate={selectedDate}
                ></AvailableDate>
            </section>


            {/* This Is Banner */}
            <section>

            </section>


            {/* This Is Banner */}
            <section>

            </section>
        </div>
    );
};

export default Appointment;