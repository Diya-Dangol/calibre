import React from 'react';
import {HashLink as Links} from 'react-router-hash-link';
import Button from '../button';

export default function ParallaxBanner() {
    return (
        <div id="slider-container">
            <div className="slider parallax">
                <ul>
                    <li className="banner-img" style={{backgroundImage: `url('img/slider/background_03.jpg')`}}>
                        <div className="carousel-caption">
                            <span className="title">Parallax World</span>
                            <h2>Start your <span>Business</span> Today</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                                pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                vamus suscipit molestie vestibulum. </p>
                            <Links smooth to="#about-business"><Button name="more about us" /></Links>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
