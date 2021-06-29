import React from 'react';
import Navbar from '../Navbar';
import ParallaxBanner from './parallax-banner';
import AboutBusiness from './about-business';
import Featured from './featured';
import Client from './client';
import Team from './team';
import Work from './work';
import Testimonial from './testimonial';
import Footer from '../footer';

export default function ParallexVersion() {
    return (
        <>
            <Navbar />
            <div role="main" class="homepage main">
                <ParallaxBanner />
                <AboutBusiness />
                <Featured />
                <Client />
                <Team />
                <Work />
                <Testimonial />
            </div>
            <Footer />
        </>
    )
}
