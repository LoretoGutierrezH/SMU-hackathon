import React from 'react';
import style from './MainBanner.module.css';
import NachoImg from '../../assets/nachov.png';
import PromoImg from '../../assets/4x4.png';
const MainBanner = (props) => {
  return (
    <section className={style.mainBanner}>
      <div className={style.promo}>
        <img src={PromoImg} alt="" />
      </div>
      <section className={style.bannerText}>
        <p>¡Qué rico quedarse en casa</p>
        <p>
          con las{" "}
          <span className={style.highlightedText}>
            recetas fáciles y sencillas
          </span>{" "}
          que
        </p>
        <p>trae Nacho Román!</p>
      </section>
      <div className={style.nachoImgContainer}>
        <img src={NachoImg} alt="" />
      </div>
    </section>
  );
}

export default MainBanner;