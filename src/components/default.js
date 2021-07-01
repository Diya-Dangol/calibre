import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {HashLink as Links} from 'react-router-hash-link';
import '../css/navbar.css';
import '../css/home.css'; 
import '../css/default.css'; 

export default function Home() {
    const [navbar, setNavbar]= useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeBackground);

        return () => { //this code is executed when we leave the page
            window.removeEventListener('scroll', changeBackground);
        }
    },[])

    return (
        <>
            <header id="header">
                <nav className= {navbar ? "navbar navbar-expand-lg navbar-light bg-light active" : "navbar navbar-expand-lg navbar-light bg-light"}>
                    <div className="container"> 
                        <Link className="navbar-brand" to="/"><img src={'./img/logo.png'} data-sticky-height="40" data-sticky-width="82" alt="Catch Square Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <Links smooth to="#demos" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Demos
                                    </Links>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item pt-o pb-0" to="/parallax_version">Parallax_version</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item pt-o pb-0" to="/slider_version">Slider_version</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item pt-o pb-0" to="/video_version">video_version</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Links smooth to="#features" className="nav-link">Features</Links>
                                </li>
                                <li className="nav-item">
                                    <Links smooth to="#footer" className="nav-link">Contact</Links>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div role="main">
                <div className="default_page content parallax-background">
                    <div className="text">
                        <h1>Calibre</h1>
                        <h2>One Page HTML Business template</h2>
                        <p>We provide most unique theme for you</p>
                        <a href="#" className="catch-btn">Purchase themes</a>
                    </div>
                </div>
                <div id="demos" className="listings">
                    <h2>3 Different Home pages template</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <figure>
                                    <img src="img/slider.jpg" alt="Slider Version" />
                                    <div className="call-to-action container-fluid">
                                        <div className="row">
                                            <div className="col demo">
                                                <Link to="/slider_version">Demo</Link>
                                            </div>
                                            <div className="col buy">
                                                <a href="#">Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <h4>Default(Slider) Version</h4>
                            </div>
                            <div className="col">
                                <figure>
                                    <img src="img/parallax.jpg" alt="Parallax Version" />
                                    <div className="call-to-action container-fluid">
                                        <div className="row">
                                            <div className="col demo">
                                                <Link to="/parallax_version">Demo</Link>
                                            </div>
                                            <div className="col buy">
                                                <a href="#">Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <h4>Parallax Version</h4>
                            </div>
                            <div className="col">
                                <figure>
                                    <img src="img/video.jpg" alt="Video Version" />
                                    <div className="call-to-action container-fluid">
                                        <div className="row">
                                            <div className="col demo">
                                                <Link to="video_version">Demo</Link>
                                            </div>
                                            <div className="col buy">
                                                <a href="#">Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <h4>Video Version</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="features" className="features" style={{marginBottom: 0}}>
                    <h2>Ohter Features</h2>
                    <div className="container">
                        <div className="row">
                            {otherFeatures.map((item) => {
                                return(
                                    <div key={item.id} clasName="feature-item col-4">
                                        <i className={item.icon} aria-hidden="ture"></i>
                                        <h5>{item.title}</h5>
                                        <p>{item.paragraph}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> */}

                <div id="features" className="features" style={{marginBottom: 0}}>
                    <h2>Other Features</h2> <br />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <h5>Responsive Design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                            <div className="col">
                                <i className="fa fa-google" aria-hidden="true"></i>
                                <h5>Google Fonts</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                            <div className="col">
                                <i className="fa fa-video-camera" aria-hidden="true"></i>
                                <h5>Video Background</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <h5>User Friendly Design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                            <div className="col">
                                <i className="fa fa-universal-access" aria-hidden="true"></i>
                                <h5>Easy to access</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                            <div className="col">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <h5>SEO Optimized</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat. </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <footer id="footer">
                <section id="copyright">
                    <p>© Copyright 2018 <b>Catch Square Themes</b>. All rights Reserved.</p>
                </section>
            </footer>
        </>
    )
}

const otherFeatures= [
    {
        id: 1,
        icon: "fa fa-mobile",
        title: "Responsive Design",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    {
        id: 2,
        icon: "fa fa-google",
        title: "Google Fonts",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    {
        id: 3,
        icon: "fa fa-video-camera",
        title: "Video Background",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    {
        id: 4,
        icon: "fa fa-user-o",
        title: "User Friendly Design",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    {
        id: 5,
        icon: "fa fa-universal-access",
        title: "Easy to access",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    {
        id: 6,
        icon: "fa fa-search",
        title: "SEO Optimized",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat."
    },
    
]