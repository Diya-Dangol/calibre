import React from 'react';
// import {Link} from 'react-router-dom';

const features=[
    {
        id: 1,
        img: 'img/featured_01.jpg',
        title: "Sub-Pivot stands out",
        subtitle:'Here is a large, attention Temparibus aut seeking feature box',
        paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.vamus suscipit molestie vestibulum. "
    },
    {
        id: 2,
        img: 'img/featured_01.jpg',
        title: "Sub-Pivot stands out",
        subtitle:'Here is a large, attention Temparibus aut seeking feature box',
        paragraph: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.vamus suscipit molestie vestibulum. "
    }  
]


export default function Featured() {
    return (
        <div id="featured" className="container-fluid col-12 row"> 
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
// export default function Featured() {
//     return (
//         <div id="featured" className="col-12 row">           
//             {features.map((feature) => {
//                 const {id, img, title, subtitle, paragraph} = feature;
//                 return(
//                     <aside key={id} className="text-white col-md-6">
//                         <img src={img} alt="" />
//                         <heading>
//                             <h6>{title}</h6>
//                             <span>{subtitle} </span>
//                             <p>{paragraph} </p>
//                         </heading>
//                     </aside>
//                 )
//             })}
//         </div>
//     )
// }

// const Feature = (props) => {
//     const  {img, title, subtitle, paragraph} = props.feature;

//     return(
//         <aside className="col-md-6">
//             <img src={img} alt="" />
//             <h6>{title}</h6>
//             <span>{subtitle} </span>
//             <p>{paragraph} </p>
//         </aside>
//     )
// }
