import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/navbar.css';

import  {HashLink as Links} from 'react-router-hash-link';

export default function Navbar() {
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
        <header id="header">
            <nav className= {navbar ? "navbar navbar-expand-lg navbar-light bg-light active" : "navbar navbar-expand-lg navbar-light bg-light"}>
                <div className="container"> 
                    <Link to="/" className="navbar-brand"><img src={'./img/logo.png'} data-sticky-height="40" data-sticky-width="82" alt="Catch Square Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown ml-1">
                                <Links smooth to="#slides" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                                </Links>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/parallax_version" className="dropdown-item pt-o pb-0">Parallax_version</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/slider_version" className="dropdown-item pt-o pb-0">Slider_version</Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/video_version" className="dropdown-item pt-o pb-0">video_version</Link>
                                </div>
                            </li>
                            <li className="nav-item ml-1">
                                <Links smooth to="#about-business" className="nav-link">about Us</Links>
                            </li>
                            <li className="nav-item ml-1">
                                <Links smooth to="#team" className="nav-link">team</Links>
                            </li>
                            <li className="nav-item ml-1">
                                <Links smooth to="#work" className="nav-link">work</Links>
                            </li>
                            <li className="nav-item ml-1">
                                <Links smooth to="#clients" className="nav-link">clients</Links>
                            </li>
                            <li className="nav-item ml-1">
                                <Links smooth to="#contact-detail" className="nav-link">Contact</Links>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
