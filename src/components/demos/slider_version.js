import React from 'react';
import Navbar from '../Navbar';
import Carousel from './carousel';
import AboutBusiness from './about-business';
import Featured from './featured';
import Client from './client';
import Team from './team';
// import Work from './work';
import Tab from './tab-work';
// import Isotope from './isotope';
import Testimonial from './testimonial';
import Footer from '../footer';

export default function SliderVersion() {
    return (
        <>
            <Navbar />
            <Carousel />
            <AboutBusiness />
            <Featured />
            <Client />
            <Team />
            {/* <Work /> */}
            {/* <Isotope /> */}
            <Tab />
            <Testimonial />
            <Footer />
        </>
    )
}
