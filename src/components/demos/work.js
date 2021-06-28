import React, {useState} from 'react';
import Button from '../button';
import {Link} from 'react-router-dom';

export default function Work() {
  const [baseImg, setBaseImg] = useState(imagesData);
  const [images, setImages] =useState(imagesData);

  const filterItem = (val) => {
    if(val === "all"){
      return setImages(baseImg);
    }
    let final = baseImg.filter( (item) => item.category === val);
    setImages(final);
    console.log(final);
  }
  
  return (
    <div id="work" className="padding">
      <div className="head">
          <div className="wrapper">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-12 centeralign">
                          <h1 className="title">Our <span>Portfolio</span></h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <ul id="filters" className="button-group">
          <li className="button is-checked" onClick={() => filterItem("all")} >show all</li>
          <li className="button" onClick={() => filterItem("web-design")} >Web Design</li>
          <li className="button" onClick={() => filterItem("print")} >Print</li>
          <li className="button" onClick={() => filterItem("photography")} >Photography</li>
          <li className="button" onClick={() => filterItem("graphics")} >Graphics</li>
          <li className="button" onClick={() => filterItem("motion")}>Motion</li>
      </ul>  
      <ImagesList imagesData = {images} />
    </div>
  )
}

const ImagesList = ({imagesData}) =>{
  return(
    <div className="grid">
      {imagesData.map((imageItem) => {
          return(
            <div className="element-item" key={imageItem.id}>
              <div className="detail" style= {{backgroundImage: `url(${imageItem.img})`}} >
                <div className="corner-top"></div>
                <div className="corner-bottom"></div>
                <h2 className="title">{imageItem.title}</h2>
                <Link to="#about-business"><Button name="visit site" /></Link> 
              </div>
            </div>
          )
      })}
      <div className="clear-fix"></div>
    </div>
  )
}

const imagesData =[
    {
      id:1,
      img: "img/work/portfolio_01.jpg",
      title: "SktechBook Logo Mockup",
      category: "print"
    },
    {
      id: 2,
      img: 'img/work/portfolio_02.jpg',
      title: "Adidas Web UI/UX",
      category: ["web", "photography"],
    },
    {
      id: 3,
      img: 'img/work/portfolio_04.jpg',
      title: "Testing Logo Mockup",
      category: "print"
    },
    {
      id: 4,
      img: "img/work/portfolio_05.jpg",
      title: "Photography Web UI/UX",
      category: "photography"
    },
    {
      id: 5,
      img: 'img/work/portfolio_02.jpg',
      title: "SketchBook Logo Mockup",
      category: "print"
    },
    {
      id: 6,
      img: 'img/work/portfolio_03.jpg',
      title: "Adidas Web UI/UX",
      category: "photography"
    },
    {
      id: 7,
      img: 'img/work/portfolio_05.jpg',
      title: 'Testing Logo Mockup',
      category: "print"
    },
    {
      id: 8,
      img: 'img/work/portfolio_04.jpg',
      title: 'Testing Logo Mockup',
      category: "print"
    },
    {
      id: 9,
      img: 'img/work/portfolio_04.jpg',
      title: "Catch Square Themes",
      category: "web-design"
    },
    {
      id: 10,
      img: "img/work/portfolio_01.jpg",
      title: "Catch Square Themes",
      category: "web-design"
    },
    {
      id: 11,
      img: "img/work/portfolio_01.jpg",
      title: "Photography Web UI/UX",
      category: "photography"
    },
    {
      id: 12,
      img: "img/work/portfolio_02.jpg",
      title: "Catch Square Design",
      category: "web-design"
    }
]