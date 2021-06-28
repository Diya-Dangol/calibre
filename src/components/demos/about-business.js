import React from 'react'

export default function AboutBusiness() {    
    
    return (
        <div id="about-business">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 section-text">
                        <h1 className="title">Beautiful and  <span>easy</span>  to use UI.</h1>
                        <div className="about-features">
                            <ul>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-diamond" aria-hidden="true"></i>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="feature-box-info">
                                        <h4>Fast and Light Weight</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="feature-box-info">
                                        <h4>Responsive Designied</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="feature-box-info">
                                        <h4>Well StructuredCode</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 section-image">
                        <img src="img/about_image.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
