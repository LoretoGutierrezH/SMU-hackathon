import React from 'react';
import {Carousel} from 'react-bootstrap';
import bannerHomeNacho from '../../assets/bannerhomenacho.png';
import clubBanner from '../../assets/banner-club.jpg';
import frescuraBanner from '../../assets/banner-frescura.jpg';

const BannerSlider = (props) => {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerHomeNacho}
            alt="First slide"
          />
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