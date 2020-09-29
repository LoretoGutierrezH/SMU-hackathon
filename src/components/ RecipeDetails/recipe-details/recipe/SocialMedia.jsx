import React from 'react'
import instagram from '../../../../assets/instagram.png'
import facebook from '../../../../assets/facebook.png'
import twitter from '../../../../assets/twitter.png'
import style from "../recipe-details.module.css";

export const SocialMedia = () => {
  return(
    <div className={style.socialMedia}>
      <img className={style.facebook} src={ facebook } alt="facebook" />
      <img className={style.instagram} src={ instagram } alt="instagram"/> 
      <img className={style.twitter} src={ twitter } alt="twitter" />
    </div>
  )
}