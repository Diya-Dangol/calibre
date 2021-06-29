import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

export default function SliderTestimonial() {
    return (
        <div id="testimonials" className="slide-ver">
            <div className="head">
                <h1 className="title"><span>Client's</span> Word</h1>
            </div>
            <div className="container">
                <ul className="slider-version-testimonials">
                    <OwlCarousel className="owl-theme" items="1" autoplay autoplayHoverPause loop>
                    {testimonialList.map((testimonial) => {
                        const {id, img, paragraph, author} = testimonial;
                        return(
                            <div key={id} className="item">
                                <li>
                                    <figure>
                                        <img src={img} alt="" />
                                    </figure>
                                    <div className="content">
                                        <p>{paragraph}</p>
                                        <span className="author">{author} </span>
                                    </div>
                                </li>
                            </div>
                        )
                    })}
                </OwlCarousel>  
                    
                </ul>
            </div>
        </div>
    )
}

const testimonialList = [
    {
        id: 1,
        img: 'img/testimonials/testimonial_1.jpg',
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel  pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat.",
        author: "- Miss Marina Di-Carepio"
    },
    {
        id: 2,
        img: "img/testimonials/testimonial_2.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit. $`{<br />}` arcu.consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.",
        author: "- Er. Chinyo Chyan"
    },
    {
        id: 3,
        img: "img/testimonials/testimonial_3.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.Lorem ipsum dolor sit amet ante nulla hendrerit arcu",
        author: "- CEO | Tokino Pvt. Ltd. "
    },
    {
        id: 4,
        img: "img/testimonials/testimonial_4.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.",
        author: "- Senior Marketing Excecutive"
    },
    {
        id: 5,
        img: "img/testimonials/testimonial_5.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.Lorem ipsum dolor sit amet ante nulla hendrerit arcu",
        author: "- Managing Director | Uber"
    },
    {
        id: 6,
        img: "img/testimonials/testimonial_1.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.Lorem ipsum dolor sit amet ante nulla hendrerit arcu",
        author: "- Corporate Head, Civil Bank"
    },
    {
        id: 7,
        img: "img/testimonials/testimonial_2.jpg",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.Lorem ipsum dolor sit amet ante nulla hendrerit arcu",
        author: "- Miss Marina Di-Carepio"
    },
]