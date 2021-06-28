import React, {useState, useEffect} from 'react';
import Button from '../button';
import {Link} from 'react-router-dom';
import './tab-work.css';

export default function Tab() {
  
  const [baseImg, setBaseImg] = useState(imagesData);
  const [images, setImages] =useState(imagesData);
  const [toggleState, setToggleState] = useState("all");

  const filterItem = (val) => {
    if(val === "all"){
      // console.log("clicked " + val);
      setToggleState(val);
      return setImages(baseImg);
    }
    let final = baseImg.filter( (item) => {
      return(item.category.find((i) => {
        return i.catName === val;
      }))
    });
    // console.log("clicked " + val);
    setToggleState(val);
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
          <li className={toggleState =="all" ? "button active is-checked" : "button"} onClick={() => filterItem("all")} >show all</li>
          <li className={toggleState =="web-desiign" ? "button active" : "button"} onClick={() => filterItem("web-design")} >Web Design</li>
          <li className={toggleState =="print" ? "button active" : "button"} onClick={() => filterItem("print")} >Print</li>
          <li className={toggleState =="photography" ? "button active" : "button"} onClick={() => filterItem("photography")} >Photography</li>
          <li className={toggleState =="graphics" ? "button active" : "button"} onClick={() => filterItem("graphics")} >Graphics</li>
          <li className={toggleState =="motion" ? "button active" : "button"} onClick={() => filterItem("motion")}>Motion</li>
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
      category: [
        {
          id: 1,
          catName: "print"
        },
        {
          id: 2,
          catName: "web-design"
        }
      ]
    },
    {
      id: 2,
      img: 'img/work/portfolio_02.jpg', 
      title: "Adidas Web UI/UX",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "photography"
        },
        {
          id: 3,
          catname: "print"
        }
      ]
    },
    {
      id: 3,
      img: 'img/work/portfolio_04.jpg',
      title: "Testing Logo Mockup",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "print"
        },
        {
          id: 3,
          catName: "web-design"
        }
      ]
    },
    {
      id: 4,
      img: "img/work/portfolio_05.jpg",
      title: "Photography Web UI/UX",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "photography"
        },
        {
          id: 3,
          catname: "print"
        }
      ]
    },
    {
      id: 5,
      img: 'img/work/portfolio_02.jpg',
      title: "SketchBook Logo Mockup",
      category: [
        {
          id: 1,
          catName: "print"
        },
        {
          id: 2,
          catName: "web-design"
        },
      ]
    },
    {
      id: 6,
      img: 'img/work/portfolio_03.jpg',
      title: "Adidas Web UI/UX",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "motion"
        },
        {
          id: 3,
          catName: "print"
        },
        // {
        //   id: 4,
        //   catName: "photography"
        // },
        {
          id: 4,
          catName: "web-design"
        }
      ]
    },
    {
      id: 7,
      img: 'img/work/portfolio_05.jpg',
      title: 'Testing Logo Mockup',
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "print"
        },
        {
          id: 2,
          catName: "web-design"
        }
      ]
    },
    {
      id: 8,
      img: 'img/work/portfolio_04.jpg',
      title: 'Testing Logo Mockup',
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "photography"
        },
        {
          id:3,
          catName: 'print'
        },
        {
          id: 4,
          catName: "web-design"
        }
      ]
    },
    {
      id: 9,
      img: 'img/work/portfolio_04.jpg',
      title: "Catch Square Themes",
      category: [
        {
          id: 1,
          catName: "motion"
        },
        {
          id: 2,
          catName: "web-design"
        }
      ]
    },
    {
      id: 10,
      img: "img/work/portfolio_01.jpg",
      title: "Catch Square Themes",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "motion"
        },
        {
          id: 3,
          catName: "print"
        },
        {
          id: 4,
          catName: "web-design"
        }
      ]
    },
    {
      id: 11,
      img: "img/work/portfolio_01.jpg",
      title: "Photography Web UI/UX",
      category: [
        {
          id: 1,
          catName: "graphics"
        },
        {
          id: 2,
          catName: "photography"
        }
      ]
    },
    {
      id: 12,
      img: "img/work/portfolio_02.jpg",
      title: "Catch Square Design",
      category: [
        {
          id: 1,
          catName: "motion"
        },
        {
          id: 2,
          catName: "print"
        },
        {
          id: 3,
          catName: "web-design"
        }
      ]
    }
]

//       <div className="element-item Motion web-design print" data-category="web-design">
//           <div className="detail" style= {{backgroundImage: `url('img/work/portfolio_02.jpg')`}}>
//               <div className="corner-top"></div>
//               <div className="corner-bottom"></div>
//               <h2 className="title">Catch Square Design</h2>
//               <a href="#" className="catch-btn">Visit Site</a>
//           </div>
//       </div>
//   </div>
//   )
// }