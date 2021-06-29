import React from 'react'

export default function AboutVideo() {    
    
    return (
        <div id="about-business">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 section-text">
                        <h1 className="title">We <span>Help</span> to grow business</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel
                            pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo. vamus
                            suscipit molestie vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.</p>
                        <div className="about-features">
                        <ul>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                    <div className="feature-box-info">
                                        <h4>Marketing Strategy</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-cart-arrow-down"></i>
                                    </div>
                                    <div className="feature-box-info">
                                        <h4>GeoLocating Features</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="feature-box-icon">
                                        <i className="fa fa-diamond" aria-hidden="true"></i>
                                    </div>
                                    <div className="feature-box-info">
                                        <h4>Targeted Branding</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum,
                                            nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 section-image">
                        <img src="img/about_video_version.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
