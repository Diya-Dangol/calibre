import {useState} from 'react';
import {Link} from 'react-router-dom';
import "../css/Navbar.css";

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <header>
            <nav classname="navbar bg-light">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        <img src="./img/logo.png" alt="Catch Square Logo" />
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="" className="nav-links dropdown-toggle" onClick={closeMobileMenu}>Home</Link>
                            <div className="dropdown-item">
                                <Link to="/parallax_version">Parallax Version</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/slider_version">Slider Version</Link>
                            </div>
                            <div className="dropdown-item">
                                <Link to="/video_version">Video Version</Link>
                            </div>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/#aboutUs'>About Us</Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/#team' className="nav-links">Team</Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/#work' className="nav-links">Work</Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/#clients'  className="nav-links">Clients</Link>
                        </li>
                        <li className="nav-item" onClick={closeMobileMenu}>
                            <Link to='/#contact'  className="nav-links">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}