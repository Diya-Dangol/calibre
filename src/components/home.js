import React from 'react';
import {Link} from "react-router-dom";
import '../css/navbar.css';
import '../css/home.css'; 
// import '../css/isotope.css';

export default function Home() {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container"> 
                    <Link className="navbar-brand" to="/"><img src={'./img/logo.png'} data-sticky-height="40" data-sticky-width="82" alt="Catch Square Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Demos
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item pt-o pb-0" to="/parallax_version">Parallax_version</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item pt-o pb-0" to="/slider_version">Slider_version</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item pt-o pb-0" to="/video_version">video_version</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}