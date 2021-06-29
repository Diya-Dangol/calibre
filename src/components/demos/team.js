import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

export default function Team() {
    return (
        <div id="team" className="padding">
            <div className="small-wrapper">
                <div className="container-fluid head">
                    <div className="row">
                        <div className="col-md-12 centeralign">
                            <h1 className="title"><span>Meet</span>  Our Experts</h1>
                            <h2 className="subtitle">Our Professional Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                                pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.
                                vamus suscipit molestie vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-listing">
                <OwlCarousel className="owl-theme" items="5" autoplayHoverPause autoplay dots nav loop>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_01.jpg" alt="" />
                        </figure>
                        <span className="name">Errica Frankie</span>
                        <span className="designation">Creative Director</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_02.jpg" alt="" />
                        </figure>
                        <span className="name">Andreas Dunkir</span>
                        <span className="designation">Senier Web Designer</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_03.jpg" alt="" />
                        </figure>
                        <span className="name">Eric Tamelson</span>
                        <span className="designation">Managing Director</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_01.jpg" alt="" />
                        </figure>
                        <span className="name">Errica Frankie</span>
                        <span className="designation">Creative Director</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_02.jpg" alt="" />
                        </figure>
                        <span className="name">Andreas Dunkir</span>
                        <span className="designation">Senier Web Designer</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <figure>
                            <img src="img/team/team_member_03.jpg" alt="" />
                        </figure>
                        <span className="name">Eric Tamelson</span>
                        <span className="designation">Managing Director</span>
                        <ul className="detail">
                            <li><a href="https://www.facebook.com/"><i
                                    className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.twitter.com/"><i
                                    className="fa fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/"><i
                                    className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
