function Header() {
  return (
    <div>
      <div className="header" id="head">	
    <div className="container"> 
      <div className="header-top">
        <div className="logo">
          <a href="index.html"><img src="public/images/logo.jpg" alt /></a>
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
                  <h1>hello I am Imelda Tanauma</h1> 
                  <h2>i am <span>graphic &amp; web designer</span></h2>
                  <h2>Airmadidi</h2>
                </div>
              </div>
            </article>
            <article style={{position: 'relative', width: '100%', opacity: 1}}> 
              <div className="banner-wrap">
                <div className="banner_center">
                  <h1>hello I am Imelda Tanauma</h1> 
                  <h2>i am <span>graphic &amp;  designer</span></h2>
                  <h2>I am form Airmadidi</h2>
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
    </div>
  )
}

export default Header
