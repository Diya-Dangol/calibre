import React from 'react';
import '../css/footer.css';

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <section id="social-links">
                    <div className="wrapper">
                        <ul>
                            <li className="facebook" style={{background: '#157dc4'}}>
                                <a href="#"><i className="fa fa-facebook-square"></i> Facebook</a>
                            </li>
                            <li className="twitter" style={{background: '#5eaade'}}><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
                            <li className="instagram" style={{background: '#1e5c83'}}><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
                            <li className="youtube" style={{background: '#b61f24'}}><a href="#"><i className="fa fa-youtube"></i> Youtube</a></li>
                            <li className="googleplus" style={{background: '#db463f'}}><a href="#"><i className="fa fa-google-plus"></i> Google +</a></li>
                        </ul>
                        <div className="clear"></div>
                    </div>
                </section>
                <section id="contact-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="title centeralign">
                                    <span>Get</span> in touch
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 rightalign">
                                <p>65 West your street Name, <br /> 22nd Floor, Melbourne, Australia</p>
                                <p>Phone: <a href="tel:0000123123">0000 123 123</a> <br /> Fax: 1234 123 123</p>
                                <p>Email: <a href="mailto:info@yourbusiness.com"><i>info@yourbusiness.com </i></a></p>
                            </div>
                            <div className="col-md-6 con-form">
                                <form action="" className="contact-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="email" placeholder="E-mail address" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea name="textarea" id="" cols="30" rows="4" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="submit" value="Send message" className="catch-btn white" />
                                        </div>
                                    </div>
                                </form>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="copyright">
                    <p>© Copyright 2018 <b>Catch Square Themes</b>. All rights Reserved. Design by: <a href="http://catchsquarethemes.com/" target="_blank" className="author">CATCH SQUARE THEMES</a></p>
                </section>
            </footer>
        </div>
    )
}
