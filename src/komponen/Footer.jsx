

function Footer() {
  return (
    <div>
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
  )
}

export default Footer
