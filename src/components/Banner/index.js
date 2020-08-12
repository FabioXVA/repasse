import React, { Component } from "react";
import Slider from "react-slick";
import './scss/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          	<img src="https://compass-ssl.xbox.com/assets/92/5d/925d1321-89fe-4537-9303-a64adaf27c07.jpg?n=Halo-MCC_GLP-Page-Hero-1084_1920x1040.jpg" />	
            <h1>PROMOÇÂO UM</h1>
          </div>
          <div>
            <h1>PROMOÇÂO Dois</h1>
          </div>
          <div>
            <h1>PROMOÇÂO Tres</h1>
          </div>
          <div>
            <h1>PROMOÇÂO Quatro</h1>
          </div>
          <div>
            <h1>PROMOÇÂO Cinco</h1>
          </div>
          <div>
            <h1>PROMOÇÂO Seis</h1>
          </div>
        </Slider>
      </div>
    );
  }
}