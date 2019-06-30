import React from "react";
import Slider from "react-slick";
 
class AppNavigatorSlick extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <React.Fragment>
        {/* HOME */}
        <div id="home">
          {/* container */}
          <div className="container">
            {/* home wrap */}
            <div className="home-wrap">
              {/* home slick */}
              <div id="home-slick" className="slick-initialized slick-slider">
                  {/* banner */}
                  <Slider {...settings}>
                  <div className="banner banner-1">
                      <img src="./style/img/image.jpg" alt />
                      <div className="banner-caption text-center">
                      <h1>Bags sale</h1>
                      <h3 className="white-color font-weak">Up to 50% Discount</h3>
                      <button className="primary-btn">Shop Now</button>
                      </div>
                  </div>
                  {/* /banner */}
                  {/* banner */}
                  <div className="banner banner-1">
                      <img src="./style/img/banner02.jpg" alt />
                      <div className="banner-caption">
                      <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                      <button className="primary-btn">Shop Now</button>
                      </div>
                  </div>
                  {/* /banner */}
                  {/* banner */}
                  <div className="banner banner-1">
                      <img src="./style/img/banner03.jpg" alt />
                      <div className="banner-caption">
                      <h1 className="white-color">New Product <span>Collection</span></h1>
                      <button className="primary-btn">Shop Now</button>
                      </div>
                  </div>
                  {/* /banner */}
                  </Slider>
                </div>
                {/* /home slick */}
              </div>
              {/* /home wrap */}
            </div>
            {/* /container */}
          </div>
          {/* /HOME */}
        </React.Fragment>            
      
    );
  }
}
export default AppNavigatorSlick;