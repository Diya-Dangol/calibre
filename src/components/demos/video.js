import React from 'react';
import {HashLink as Links} from 'react-router-hash-link';
import Button from '../button';

export default function Video() {
    return (
        <div id="slider-container">
            <div className="slider ">
                <ul className="video-version">
                    <li>
                        <video autoPlay muted loop>
                            <source src="./videos/blurry-video-of-people-working.mp4" type="video/mp4" />
                            <source src="./videos/Blurry_Video_Of_People_Working.webm" type="video/webm" />
                        </video>
                        <div className="carousel-caption">
                            <span className="title">You only have to know one thing</span>
                            <h2>You can <span>Learn</span> Anything</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                            <Links smooth to="#about-business"><Button name="more about us" /></Links>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
