import heroBanner from '../../../assets/images/chair.png'
import '../Appointment/Appointment.css'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="lg:flex lg:flex-row-reverse lg:justify-between px-3 lg:h-screen mt-20 mb-10 lg:mb-0 lg:mt-0 background-image lg:bg-cover">

                <div className='lg:w-5/6 my-auto justify-end'>
                    <img src={heroBanner} alt="" />
                </div>
                <div className='my-auto lg:px-36'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;