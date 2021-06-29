import React from 'react';
// import {Link} from 'react-router-dom';

const features=[
    {
        id: 1,
        img: 'img/featured_03.jpg',
        title: "Sub-Pivot stands out",
        subtitle:'Here is a large, attention Temparibus aut seeking feature box',
        paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.vamus suscipit molestie vestibulum. "
    },
    {
        id: 2,
        img: 'img/featured_02.jpg',
        title: "Sub-Pivot stands out",
        subtitle:'Here is a large, attention Temparibus aut seeking feature box',
        paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.vamus suscipit molestie vestibulum. "
    }  
]


export default function VideoFeatured() {
    return (
        <div id="featured" className="row ml-0"> 
            {features.map((feature,i) => {
                const {id, img, title, subtitle, paragraph} = feature;
                return(
                    <aside key={id} className="bg-image text-white" style={{backgroundImage: `url(${img})`}}>
                        <div className="bg-black image-padding">
                            <header>
                                <h6>{title}</h6>
                                <span>{subtitle} </span>
                                <p>{paragraph} </p>
                            </header>
                        </div>
                    </aside>
                )
            })}
        </div>
    )
}