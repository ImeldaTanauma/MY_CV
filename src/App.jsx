import './swipebox.css'
import './style.css'
import './bootstrap.css'


const App =() => {

  return (
<>
<div>
  <div className="header" id="head">	
    <div className="container"> 
      <div className="header-top">
        <div className="logo">
          <a href="index.html"><img src="src/assets/images/logo.jpg" alt /></a>
        </div>
        <div className="top-menu">
          <span className="menu"> </span>
          <ul>
            <nav className="cl-effect-5">
              <li><a className="active" href="index.html"><span data-hover="Home">home</span></a></li>
              <li><a href="#about" className="scroll"><span data-hover="about">about</span></a></li>
              <li><a href="#work" className="scroll"><span data-hover="work"><span>work</span></span></a></li>
              <li><a href="#services" className="scroll"><span data-hover="services">services</span></a></li>
              <li><a href="#contact" className="scroll"><span data-hover="contact">contact</span></a></li>
            </nav>
          </ul>
        </div>
        {/*script-nav*/}
        <div className="clearfix" />
      </div>  
      <div className="index-banner">
        <div className="wmuSlider example1">
          <div className="wmuSliderWrapper">
            <article style={{position: 'absolute', width: '100%', opacity: 0}}> 
              <div className="banner-wrap">
                <div className="banner_center">
                  <h1>hello world,</h1> 
                  <h2>i am <span>graphic &amp; web designer</span></h2>
                  <h2>from morocco</h2>
                </div>
              </div>
            </article>
            <article style={{position: 'relative', width: '100%', opacity: 1}}> 
              <div className="banner-wrap">
                <div className="banner_center">
                  <h1>Content here,</h1> 
                  <h2>Lorem <span>graphic &amp;  designer</span></h2>
                  <h2>Contrary</h2>
                </div>
              </div>
            </article>
            <article style={{position: 'absolute', width: '100%', opacity: 0}}>
              <div className="banner-wrap">
                <div className="banner_center">
                  <h1>Lorem Ipsum ,</h1> 
                  <h2>Contrary to <span>&amp;  designer</span></h2>
                  <h2>reproduced below</h2>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>     
  </div>
  <div className="content">
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <h3>about</h3>
          <div className="about-imag">
            <img src="src/assets/images/pic-9.jpg" alt />
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
          <a href="#work" className="scroll"><img src="src/assets/images/arrow1.jpg" alt /></a>
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
                          <img src="src/assets/images/pic-1.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-3.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-3.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-4.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-4.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-5.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-5.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-6.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-6.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-7.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-7.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-8.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-8.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />	
                    </div>
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-5.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-5.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-6.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-6.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-7.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-7.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-8.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-8.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />	
                    </div>	 	        					 
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-3.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-3.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-4.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-4.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>		        					 
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-3">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-1.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-1.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-2.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-2.jpg" className="img-responsive" alt />
                          <span className="zoom-icon" /> 
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>	
                  </div>
                  <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-4">
                    <div className="tab_img">
                      <div className="col-md-3 img-top grid_box">
                        <a href="src/assets/images/pic-1.jpg" className="swipebox" title="Image Title">
                          <img src="src/assets/images/pic-1.jpg" className="img-responsive" alt />
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
            <a href="#services" className="scroll"><img src="src/assets/images/arrow.jpg" alt /></a>
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
            <img src="src/assets/images/img1.png" alt />
            <h4>webdesign</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="col-md-4 services-grid">
            <img src="src/assets/images/img2.png" alt />
            <h4>print design</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="col-md-4 services-grid">
            <img src="src/assets/images/img3.png" alt />
            <h4>web development</h4>
            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
          </div>
          <div className="clearfix" />
          <div className="arrow1">
            <a href="#contact" className="scroll"><img src="src/assets/images/arrow1.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
    {/* services-section-ends */}
  </div>
  <div className="footer-section" id="contact">
    <div className="container"> 
      <div className="contact-header">
        <h3> contact</h3>
        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
      </div>
      <div className="social-icon">
        <a href="#"><i className="icon1" /></a>
        <a href="#"><i className="icon2" /></a>
        <a href="#"><i className="icon3" /></a>
        <a href="#"><i className="icon4" /></a>
        <a href="#"><i className="icon5" /></a>
        <a href="#"><i className="icon6" /></a>
        <a href="#"><i className="icon7" /></a>
        <a href="#"><i className="icon8" /></a>
      </div>
      <div className="contact">
        <form>
          <div className="col-md-4 contactgrid">
            <input type="text" className="text" defaultValue=" name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = ' name';}" />
          </div>
          <div className="col-md-4 contactgrid">
            <input type="text" className="text" defaultValue="email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'email';}" />
          </div>
          <div className="col-md-4 contactgrid">
            <input type="text" className="text" defaultValue="phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'phone';}" />
          </div>
          <div className="col-md-8 contactgrid1">
            <textarea onfocus="if(this.value == 'Your Message') this.value='';" onblur="if(this.value == '') this.value='Your Message';" defaultValue={"Your Message"} />
          </div>
          <div className="col-md-4 contactgrid2">
            <input type="submit" defaultValue="[send message]" />
          </div>
          <div className="clearfix" />
        </form>
      </div>
      <div className="footer-bottom">
        <p>© 2015 Onepage . All rights  Reserved | Template by<a href="http://templatestock.com" target="target_blank">Template Stock</a></p>
      </div>
      <a href="#" id="toTop" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
    </div>
  </div>		
</div>

</>
  )
}
export default App
