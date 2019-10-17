import React, { Component } from 'react';
import Slider from "react-slick";
// https://github.com/akiran/react-slick

class CarouselText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <blockquote className="blockquote">
          <p>你在玫瑰花上所花的時間，使你的玫瑰變得重要。</p>
        </blockquote>
        <blockquote className="blockquote">
          <p>我們把心給了別人，就收不回來了；</p>
        </blockquote>
        <blockquote className="blockquote">
          <p>別人又給了別人，愛便流通於世。</p>
        </blockquote>
        <blockquote className="blockquote">
          <p>C'est la vie</p>
        </blockquote>
      </Slider>
    );
  }
}

export default CarouselText;