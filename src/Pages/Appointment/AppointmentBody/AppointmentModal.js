import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({ treatment, selectedDate }) => {

    const { name, slots } = treatment;

    const date = format(selectedDate, 'PP')

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        console.log(date, slot, name, phone, email);
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-accent">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-4'>
                        <input type="text" disabled className="input w-full font-semibold" value={date} />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <button className='btn border-none bg-accent text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;