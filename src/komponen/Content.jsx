
function Content() {
  return (
    <div>
      <div className="content">
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <h3>about</h3>
          <div className="about-imag">
            <img src="public/images/pic-9.jpg" alt />
          </div>
          <div className="about-text">
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p> 
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. . </p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="about-sectiongrids">
          <div className="col-md-6 about-leftgrid">
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Graphic Design</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Ui/Ux</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Logo Design</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Html/Css</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 about-rightgrid">
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>web design</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>branding</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Photography</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
            <div className="polls">
              <div className="poll">
                <div className="poll-desc">
                  <h4>Jquery</h4>
                </div>
                <div className="percentage">
                  <p>75%</p>
                </div>
                <div className="clearfix" />
              </div>
              <div className="skills">
                <div style={{width: '75%'}}> </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="arrow1">
          <a href="#work" className="scroll"><img src="public/images/arrow1.jpg" alt /></a>
        </div>
      </div>
    </div>
    {/* about-section-ends */}
    <div className="works-section" id="work">
      <div className="works-header">
        <h3>works</h3>
        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
      </div>
      <div className="portfolio-section-bottom-row" id="portfolio">
        <div className="container">
          <link rel="stylesheet" href="css/swipebox.css" />
          {/* Portfolio Ends Here */}
          <div className="sap_tabs">
            <div id="horizontalTab" style={{display: 'block', width: '100%', margin: 0}}>
              <ul className="resp-tabs-list">
                <li className="resp-tab-item" aria-controls="tab_item-0" role="tab"><span>All</span></li>
                <li className="resp-tab-item" aria-controls="tab_item-1" role="tab"><span>Branding</span></li>
                <li className="resp-tab-item" aria-controls="tab_item-2" role="tab"><span>Print</span></li>
                <li className="resp-tab-item" aria-controls="tab_item-3" role="tab"><span>Web design</span></li>
                <li className="resp-tab-item" aria-controls="tab_item-4" role="tab"><span>Photography</span></li>
                <div className="clearfix" />
              </ul>	
              <div id="portfoliolist">
                <div className="resp-tabs-container">
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-1.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-1.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-3.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-3.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-4.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-4.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-5.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-5.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-6.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-6.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-7.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-7.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-8.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-8.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />	
                    </div>
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-5.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-5.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-6.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-6.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-7.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-7.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-8.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-8.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />	
                    </div>	 	        					 
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-3.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-3.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-4.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-4.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>		        					 
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-3">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-1.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-1.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>	
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-4">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="public/images/pic-1.jpg" className="swipebox" title="Image Title">
                          <img src="public/images/pic-1.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>	
                  </div>										
                </div>	
              </div>
            </div>
          </div>				
          <div className="arrow">
            <a href="#services" className="scroll"><img src="public/images/arrow.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
    {/* portfolio-section-ends */}
    <div className="services-section" id="services">
      <div className="container"> 
        <div className="services-header">
          <h3>services</h3>
          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
        </div>
        <div className="services-sectiongrids">
          <div className="col-md-4 services-grid">
            <img src="public/images/img1.png" alt />
            <h4>webdesign</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="col-md-4 services-grid">
            <img src="public/images/img2.png" alt />
            <h4>print design</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="col-md-4 services-grid">
            <img src="public/images/img3.png" alt />
            <h4>web development</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="clearfix" />
          <div className="arrow1">
            <a href="#contact" className="scroll"><img src="public/images/arrow1.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
    {/* services-section-ends */}
  </div>
    </div>
  )
}

export default Content
