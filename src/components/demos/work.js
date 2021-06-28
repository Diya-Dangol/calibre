import React from 'react'

export default function Work() {
  return (
    <div>
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
            <li className="button is-checked" data-filter="*">show all</li>
            <li className="button" data-filter=".web-design">Web Design</li>
            <li className="button" data-filter=".print">Print</li>
            <li className="button" data-filter=".photography">Photography</li>
            <li className="button" data-filter=".graphics">Graphics</li>
            <li className="button" data-filter=".motion">Motion</li>
        </ul>
        <div className="grid">
            <div className="element-item print web-design " data-category="print">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_01.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">SketchBook Logo Mockup</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item photography graphics print" data-category="photography">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_02.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Adidas Web UI/UX</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item graphics web-design " data-category="print">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_04.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Testing Logo Mockup</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item motion photography graphics print" data-category="photography">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_05.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Photography Web UI/UX</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item print web-design " data-category="print">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_02.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">SketchBook Logo Mockup</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item motion web-design graphics print" data-category="photography">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_03.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Adidas Web UI/UX</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item graphics print web-design " data-category="print">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_05.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Testing Logo Mockup</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item photography graphics web-design " data-category="print">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_04.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Testing Logo Mockup</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item   motion" data-category="web-design">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_04.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Catch Square Themes</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item motion graphics print web-design" data-category="web-design">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_01.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Catch Square Design</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item photography graphics" data-category="photography">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_01.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Photography Web UI/UX</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
            <div className="element-item Motion web-design print" data-category="web-design">
                <div className="detail" style={{backgroundImage: `url('img/work/portfolio_02.jpg')`}}>
                    <div className="corner-top"></div>
                    <div className="corner-bottom"></div>
                    <h2 className="title">Catch Square Design</h2>
                    <a href="#" className="catch-btn">Visit Site</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
