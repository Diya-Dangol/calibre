import React from 'react';
import Navbar from '../Navbar';
import Carousel from './carousel';
import AboutBusiness from './about-business';
import Featured from './featured';
import Client from './client';
import Team from './team';
import Work from './work';
// import Tab from './tab-work';
// import Isotope from './isotope';
import SliderTestimonial from './slider-testimonial';
import Footer from '../footer';

export default function SliderVersion() {
    return (
        <>
            <Navbar />
            <div role="main" class="homepage main">
                <Carousel />
                <AboutBusiness />
                <Featured />
                <Client />
                <Team />
                <Work />
                {/* <Isotope /> */}
                {/* <Tab /> */}
                <SliderTestimonial />
            </div>
            <Footer />
        </>
    )
}
