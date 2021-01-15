import React from 'react'
import './MiddlePanel.css'
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default function MiddlePanel() {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return (
        <div className="MiddlePanel">
           <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/400/09f/fff.png"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/400/09f/fff.png"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/400/09f/fff.png"/>
          </div>
        </Slider>
        </div>
    )
}
