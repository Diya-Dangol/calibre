import React from 'react';
import Navbar from '../Navbar';
import Carousel from './carousel';
import AboutBusiness from './about-business';
import Featured from './featured';
import Client from './client';
import Team from './team';
import Work from './work';
import SliderTestimonial from './slider-testimonial';
import Footer from '../footer';

export default function SliderVersion() {
    return (
        <>
            <Navbar />
            <div role="main" className="homepage main">
                <Carousel />
                <AboutBusiness />
                <Featured />
                <Client />
                <Team />
                <Work />
                <SliderTestimonial />
            </div>
            <Footer />
        </>
    )
}
