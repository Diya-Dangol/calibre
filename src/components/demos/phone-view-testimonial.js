import React from 'react';
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
            items: 1,
            dots: false,
        },
        1000:{
            items: 3,
            dots: false,
        },
    },
}

// useEffect(() =>{options},[])

export default function PhoneViewTestimonial() {
    
    return (
        <div id="testimonials">
            <div className="head">
                <h1 className="title"><span>Client's</span> Word</h1>
            </div>
            <div className="container">
                <div className= "testimonial-slider">
                    <img src="img/iphone.png" alt="" className="iphone-graphics" /> 
                    <ul>
                        <OwlCarousel className="owl-theme" {...options} autoplay center autoplayHoverPause loop>
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