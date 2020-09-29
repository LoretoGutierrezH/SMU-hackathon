import React from 'react';
import style from './MainBanner.module.css';
import PromoImg from "../../assets/bannerquericojajaja.png";
const MainBanner = (props) => {
  return (
      <div className={style.promo}>
        <img src={PromoImg} alt="" />
      </div>
  );
}

export default MainBanner;