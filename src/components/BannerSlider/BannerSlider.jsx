import React from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import bannerHomeNacho from '../../assets/bannerhomenacho.png';
import clubBanner from '../../assets/banner-club.jpg';
import frescuraBanner from '../../assets/banner-frescura.jpg';
//comentario para pushear

const BannerSlider = (props) => {
  return (
      <Carousel>
        <Carousel.Item>
          <Link to="/recetas"><img
            className="d-block w-100"
            src={bannerHomeNacho}
            alt="First slide"
          /></Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={clubBanner}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frescuraBanner}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  );
}

export default BannerSlider;