import React from 'react';
import {Link} from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const options ={
    responsive:{
        0:{
            items: 1,
            dots: false,
        },
        600:{
            items: 3,
            dots: false,
        },
        1000:{
            items: 5,
            dots: false,
        },
    },
}

export default function Client() {
    return (
        <div id="clients">
            <OwlCarousel className="owl-theme" {...options} autoplay autoplayHoverPause loop>
                {clientList.map((client) => {
                    const {id, img, alt} = client;
                    return(
                        <div key={id} className="item">
                            <Link to="/slider_version">
                                <img src={img} alt={alt} />
                            </Link>
                        </div>
                    )
                })}
            </OwlCarousel>  
        </div>
    )
}

const clientList = [
    {
        id:1,
        img: 'img/clients/logo1.png',
        alt: 'logo1'
    },
    {
        id:2,
        img: 'img/clients/logo2.png',
        alt: 'logo2'
    },
    {
        id:3,
        img: 'img/clients/logo3.png',
        alt: 'logo3'
    },
    {
        id:4,
        img: 'img/clients/logo4.png',
        alt: 'logo4'
    },
    {
        id:5,
        img: 'img/clients/logo5.png',
        alt: 'logo5'
    },
    {
        id:6,
        img: 'img/clients/logo6.png',
        alt: 'logo6'
    },
    {
        id:7,
        img: 'img/clients/logo1.png',
        alt: 'logo1'
    },
    {
        id:8,
        img: 'img/clients/logo2.png',
        alt: 'logo2'
    },
    {
        id:9,
        img: 'img/clients/logo3.png',
        alt: 'logo3'
    },
    {
        id:10,
        img: 'img/clients/logo4.png',
        alt: 'logo4'
    },
    {
        id:11,
        img: 'img/clients/logo5.png',
        alt: 'logo5'
    },
    {
        id:12,
        img: 'img/clients/logo6.png',
        alt: 'logo6'
    }    
]