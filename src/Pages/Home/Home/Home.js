import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Informations from './Informations';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <section className='container mx-auto'>
                <Banner></Banner>
            </section>


            {/* opening, loaction and contact starts */}
            <section className='container mx-auto'>
                <Informations></Informations>
            </section>


            {/* Services starts */}
            <section className='container mx-auto'>
                <Services></Services>
            </section>


            {/* Exceptional Dental starts */}
            <section className='container mx-auto'>
                <Exceptional></Exceptional>
            </section>


            {/* Appointment starts */}
            <section>
                <Appointment></Appointment>
            </section>


            {/* Testimonial starts */}
            <section className='container mx-auto'>
                <Testimonials></Testimonials>
            </section>


            {/* Contact starts */}
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;