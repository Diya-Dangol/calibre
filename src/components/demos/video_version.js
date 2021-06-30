import React from 'react';
import Navbar from '../Navbar';
import Video from './video';
import AboutVideo from './about-video';
import VideoFeatured from './video-featured';
import Client from './client';
import Team from './team';
import Work from './work';
import Testimonial from './testimonial';
import Footer from '../footer';

export default function ParallexVersion() {
    return (
        <>
            <Navbar />
            <div role="main" className="homepage main">
                <Video />
                <AboutVideo />
                <VideoFeatured />
                <Client />
                <Team />
                <Work />
                <Testimonial />
            </div>
            <Footer />
        </>
    )
}
