import React, {useState, useEffect} from 'react';
import SliderTestimonial from './slider-testimonial';
import PhoneViewTestimonial from './phone-view-testimonial';


export default function Testimonial() {
    const [size, setSize] = useState(true);

    const showHideImage = () =>{
        if(window.innerwidth >= 400){
            setSize(true)
        }else{
            setSize(false);

        }
    }
    useEffect(() => {
        window.addEventListener('resize', showHideImage);
    },[]);
    
    return (
        <div>
            {size ? <PhoneViewTestimonial /> : <SliderTestimonial />}
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