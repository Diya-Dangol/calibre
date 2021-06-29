import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink as Links} from 'react-router-hash-link';
import Button from '../button';

export default function Carousel() {
    return (
        <div>
            <div id="slider-container" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slider-container" data-slide-to="0" className="active"></li>
                    <li data-target="#slider-container" data-slide-to="1"></li>
                    <li data-target="#slider-container" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="banner-img" src ={'./img/slider/background_04.jpg'} alt="" />  
                        <div className='carousel-caption'>
                            <span className="title">
                                Let's make great together. 
                            </span>
                            <h2>We help you to <span>achieve </span> goals
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                                pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                vamus suscipit molestie vestibulum. 
                            </p>
                            <Links smooth to="#about-business"><Button name="more about us" /></Links>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="banner-img" src ={'./img/slider/background_05.jpg'} alt="" />
                        <div className='carousel-caption'>
                            <span className="title">Let's make great together. </span>
                            <h2> <span>Creative Business</span> Agency</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                                pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                vamus suscipit molestie vestibulum. </p>
                            <Links smooth to="#about-business"><Button name="more about us" /></Links>      
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="banner-img" src ={'./img/slider/bg_02.jpg'} alt="" />
                        <div className='carousel-caption'>
                            <span className="title">We help you in Creativity </span>
                            <h2> We <span>Support</span> for best</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                                pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                vamus suscipit molestie vestibulum. </p>
                            <Links smooth to="#about-business"><Button name="more about us" /></Links>
                        </div>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#slider-container" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#slider-container" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
        </div>
    )
}
