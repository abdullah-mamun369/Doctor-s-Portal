import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import AppointmentModal from './AppointmentModal';

const AvailableDate = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])

    const [treatment, setTreatment] = useState(null)



    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div className='container mx-auto mb-32 px-4'>
            <div>
                <p className='my-12 lg:my-32 text-center text-secondary font-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>

                <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                    {
                        appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}

                        ></AppointmentOption>)
                    }
                </div>
                {
                    treatment &&
                    <AppointmentModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                    ></AppointmentModal>
                }

            </div>

        </div>
    );
};

export default AvailableDate;